
import { useRef, useEffect, useCallback } from 'react';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow';
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor';

function VtkComponent() {
	const vtkContainerRef = useRef(null);
	const context = useRef(null);
	const flexContainer = useRef(null);

	// This is an example of how you can use states
	// See the code commented below
	// const [coneResolution, setConeResolution] = useState(6);

	useEffect(() => {
		if (context.current) return;
		
		const renderWindow = vtkRenderWindow.newInstance();
		const renderer = vtkRenderer.newInstance();
		renderWindow.addRenderer(renderer);

		const openGlRenderWindow = vtkOpenGLRenderWindow.newInstance();
		renderWindow.addView(openGlRenderWindow);

		const interactor = vtkRenderWindowInteractor.newInstance();
		interactor.setView(openGlRenderWindow);
		interactor.initialize();

		const container = vtkContainerRef.current;
		openGlRenderWindow.setContainer(container);
		openGlRenderWindow.setSize(container.clientWidth, container.clientHeight);

		// window.addEventListener('resize', () => {
		// 	const boundingRect = container.getBoundingClientRect();
		// 	openGlRenderWindow.setSize(boundingRect.width, boundingRect.height);
		// });

		// const observer = new ResizeObserver((entries) => {
		// 	console.log('ResizeObserver', entries);
		// 	const boundingRect = container.getBoundingClientRect();
		// 	openGlRenderWindow.setSize(boundingRect.width, boundingRect.height);
		// });
		// observer.observe(container);

		// NOTE: Here you can start adding components to the renderer (use React props)

		const handleResize = () => {
			openGlRenderWindow.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

		renderer.resetCamera();
		renderWindow.render();

		context.current = {
			renderWindow,
			renderer,
			openGlRenderWindow
		};

		return () => {
			if (context.current) {
				const { renderer, renderWindow } = context.current;
				renderer.delete();
				renderWindow.delete();
				context.current = null;
			}

			// observer.disconnect();
		};
	}, [vtkContainerRef]);

	// useEffect(() => {
	// 	if (context.current) {
	// 		const { coneSource, renderWindow } = context.current;
	// 		coneSource.setResolution(coneResolution);
	// 		renderWindow.render();
	// 	}
	// }, [coneResolution]);

	return (
		<div style={{flex: '1 0 auto'}} ref={flexContainer}>
			<div ref={vtkContainerRef} style={{width: '100%', height: '100%'}} />
		</div>
	);
}

export default VtkComponent;