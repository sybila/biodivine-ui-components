const{expect:o}=__STORYBOOK_MODULE_TEST__,r={title:"Demo",component:"my-label"},e={name:"Demo story"},a={name:"Simple test",play:async({canvas:n,userEvent:t})=>{await t.keyboard("abc");const s=document.querySelector("body");await o(s).toBeDisabled()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Demo story'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Simple test',
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.keyboard('abc'); // User is typing something mindlessly.
    const body = document.querySelector('body')!;
    // This should intentionally fail to make sure CI is working correctly.
    await expect(body).toBeDisabled();
  }
}`,...a.parameters?.docs?.source}}};const c=["Default","Test"];export{e as Default,a as Test,c as __namedExportsOrder,r as default};
