---
title: Linear Workflow
---

In modern rendering engines, linear workflow is essential for achieving physically accurate lighting and color representation. This approach ensures that all calculations from shading to post-processing occur in linear color space, preventing errors caused by gamma-compressed textures or incorrect blending. By working in linear space and applying gamma correction only at the final output stage, it maintains consistency between lighting, textures, and effects, resulting in more realistic and predictable visual effects.

<!-- In engine v1, linear workflow was limited to `StandardMaterial` only, but in engine v2, it is fully integrated into all shaders and rendering stages (including `ShaderMaterial`, UI rendering, particles, and all other elements) to ensure consistent and physically accurate color processing. -->

## Shader Input and Output Processing

Proper linear workflow ensures that all color calculations in shaders occur in a physically correct manner. This requires careful handling of both inputs and outputs to maintain accuracy throughout the entire rendering pipeline.

### **Shader Input: Ensuring Linear Data**

Shaders require all input values to be in linear space to avoid incorrect lighting results. This affects both textures and uniform color values:

- **Textures** that store color data (such as albedo maps) should be marked as **sRGB**. When the texture is sampled, the GPU automatically converts sRGB-encoded values to linear space to ensure correct color calculations.
- **Color uniforms** are automatically converted from gamma space to linear space for `StandardMaterial`, particle rendering, and other built-in rendering systems. However, when manually setting uniforms using `Material.setParameter` or `MeshInstance.setParameter`, the caller is responsible for ensuring that values are provided in linear space. This is particularly important for `ShaderMaterial`, where all parameters must be explicitly defined using `setParameter`. To support this, the `Color` class provides a `Color.linear()` function that converts gamma space colors to linear space.

When all inputs are in linear space, shaders perform lighting calculations with physically accurate results.

### **Shader Output: Gamma Correction Management**

When writing final color output, gamma correction handling depends on whether the rendering is LDR (Low Dynamic Range) or HDR (High Dynamic Range):

- **LDR Rendering**: Colors are immediately gamma-corrected in the shader before being written to the render target, ensuring they display correctly on standard monitors.
- **HDR Rendering**: Colors remain in linear space when written to the render target, typically requiring **floating-point formats** (such as `RGBA16F` or `RGBA32F`) to preserve precision and avoid banding. Gamma correction is applied later, usually in the final tone mapping or post-processing stage, allowing effects like bloom and color grading to work with high-precision linear HDR colors.

This structured approach ensures that lighting, blending, and post-processing work consistently, resulting in more realistic and predictable rendering results.
