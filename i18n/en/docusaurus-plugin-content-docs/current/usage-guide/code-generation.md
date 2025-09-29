---
id: code-generation
title: Code Generation
sidebar_label: Code Generation
---

# Code Generation

Learn how to use OasisW's AI code generation feature to automatically generate game logic and scripts.

## 1. Create Script and Get API Key

1. Create a script file in the **Asset view**.

![Code](/img/usage-guide/13_1.png)

2. Double-click the created js file to enter, then click the icon next to Save to **Generate API Key**.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/13_3.png" alt="Image" style={{maxWidth: '25%'}} />
  <img src="/img/usage-guide/13_4.png" alt="Image" style={{maxWidth: '65%'}} />
</div>
<br />

3. Click **Get API Key** to navigate to the [openRouter.ai](https://openrouter.ai/) page.  

![Code](/img/usage-guide/13_5.png)

 
4. Click **Sign in** to log in and register.

![Code](/img/usage-guide/13_6.png)

5. After logging in, click **Profile → Keys**.

![Image](/img/usage-guide/13_7.png)

6. Click **Create API Key**.

![Image](/img/usage-guide/13_8.png)

7. **Enter a key name then click Create**.

![Image](/img/usage-guide/13_9.png)

8. Copy the generated API Key.

![Image](/img/usage-guide/13_10.png)

## 2. Register Key in Editor and Generate Code

1. Return to the editor, enter the **API Key**, then click the **Apply button**.

![Image](/img/usage-guide/13_11.png)

2. When key application is complete, click the **Yes button**.

![Image](/img/usage-guide/13_12.png)

3. Enter the command you want to implement in the prompt window.  
   - Example: `"implement movement with wasd arrow keys"`  
4. Click the **Send button**.   

![Image](/img/usage-guide/13_13.png)

If a red **Retry button** appears on screen, click it to try again!

![Image](/img/usage-guide/13_14.png)

5. Click the **Apply button** to apply the code, then save and close the code window.

![Image](/img/usage-guide/13_15.png)

6. Apply the script to the entity you want to use it on.

7. Click **Launch** in the **Viewport** to run and verify that the Box moves with arrow key input.

<div style={{display: 'flex', gap: '10px'}}>
  <img src="/img/usage-guide/13_16_1.png" alt="Image" style={{maxWidth: '45%'}} />
  <img src="/img/usage-guide/13_16_3.png" alt="Image" style={{maxWidth: '45%'}} />
</div>

<!-- ## Usage Tips

- Write clear and specific requirements
- Consider compatibility with existing code
- Implement features step by step
- Perform code review and testing -->