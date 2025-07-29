const{expect:s}=__STORYBOOK_MODULE_TEST__,r={title:"Demo",component:"my-label"},e={name:"Demo story"},t={name:"Simple test",play:async({userEvent:a})=>{await a.keyboard("abc");const o=document.querySelector("body");await s(o).toBeDisabled()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Demo story'
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Simple test',
  play: async ({
    userEvent
  }) => {
    await userEvent.keyboard('abc'); // User is typing something mindlessly.
    const body = document.querySelector('body')!;
    // This should intentionally fail to make sure CI is working correctly.
    await expect(body).toBeDisabled();
  }
}`,...t.parameters?.docs?.source}}};const n=["Default","Test"];export{e as Default,t as Test,n as __namedExportsOrder,r as default};
