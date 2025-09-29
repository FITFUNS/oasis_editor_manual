---
title: Graphics
---

OasisW integrates an advanced graphics engine that provides high-performance 3D rendering on the web. The engine provides support for both [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) and [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) to deliver cutting-edge graphics features while ensuring compatibility across all modern browsers.

## Graphics Engine Backends

The OasisW engine supports multiple graphics backends:

* **WebGPU (Beta)** - Next-generation graphics API that provides reduced driver overhead and compute shader support
* **WebGL 2.0** - Mature technology with [widespread support](https://caniuse.com/webgl2) across all browsers and devices
* **Null** - For running the engine in headless environments like Node

:::note[Automatic Fallback]

The engine seamlessly falls back from WebGPU to WebGL based on browser support.

:::

## Key Rendering Features

### Physically Based Rendering (PBR)

* Comprehensive PBR support through metallic/roughness and specular/glossiness workflows
* Energy-conserving and physically accurate lighting models
* Support for clearcoat, anisotropy, subsurface, and transmission materials

### Advanced Lighting

* **Clustered Lighting System** - Efficiently handles hundreds of dynamic lights
* **Directional, Point, and Spot Lights** with configurable shadows and cookies
* **Area Lights** - Rectangular, disk, and spherical light sources for realistic lighting
* **Image-Based Lighting (IBL)** using HDR environment maps
* **Runtime Lightmap Generation** for static lighting optimization

### High Dynamic Range (HDR) Rendering

* **Linear Workflow** with automatic gamma correction
* **HDR Display Output** support on compatible devices
* **Advanced Tone Mapping** operators including ACES, Neutral, and Linear
* **CameraFrame System** for comprehensive post-processing pipeline

### Modern Rendering Pipeline

* **Render Pass Architecture** enabling advanced effects
* **Multiple Render Target (MRT)** support
* **Depth Pre-pass** and **Temporal Anti-Aliasing (TAA)**
* **Hardware Instancing** for efficient rendering of repeated geometry
* **Static and Dynamic Batching** to reduce draw calls

### Post-Processing Effects

The CameraFrame system provides a complete set of post-processing effects:

* **HDR Bloom** with physically accurate light bleeding
* **Screen Space Ambient Occlusion (SSAO)**
* **Depth of Field (DoF)** with bokeh effects
* **Temporal Anti-Aliasing (TAA)** for smooth edges
* **Vignette, Sepia, Brightness/Contrast** and color grading

### Advanced Rendering Techniques

<!-- * **3D Gaussian Splatting** for realistic scene reconstruction -->
* **Hardware-Accelerated Particles** for special effects
* **Mesh Skinning and Morphing** for character animation
* **Procedural Geometry Generation** using optimized primitives
<!-- * **Texture Compression** with Basis Universal -->

### Custom Shaders

* **Flexible Shader System** supporting both GLSL (WebGL) and WGSL (WebGPU)
* **Automatic Shader Generation** through chunk-based composition
* **Preprocessor Support** for shader variants and includes
* **WebGPU Compute Shaders** for GPU-accelerated computation

The graphics engine is continuously updated to leverage the latest web standards and hardware capabilities, ensuring that OasisW applications deliver outstanding visual quality and performance across all platforms.
