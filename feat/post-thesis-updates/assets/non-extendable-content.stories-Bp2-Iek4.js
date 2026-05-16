import{i as x,a as f,x as p}from"./iframe-elR7wou-.js";import{n as c,t as v}from"./property-B2V1JLjv.js";var s=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e,r,i)=>{for(var a=i>1?void 0:i?g(e,r):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=(i?h(e,r,a):h(a))||a);return i&&a&&s(e,r,a),a},u=(t,e,r)=>b(t,e+"",r);let n=class extends f{updateStyleVariable(t,e,r){const i=this[t]??r;this.style.setProperty(e,i)}updated(t){const e=(r,i,a)=>t.has(r)&&this.updateStyleVariable(r,i,a);e("compHeight","--non-extendable-content-comp-height","39px"),e("compWidth","--non-extendable-content-comp-width","500px"),e("contHeight","--non-extendable-content-cont-height","100%"),e("contWidth","--non-extendable-content-cont-width","100%"),e("contJustifyC","--non-extendable-content-cont-justify-content","center"),e("contAlignI","--non-extendable-content-cont-align-items","center"),e("contOverflowX","--non-extendable-content-cont-overflow-x","hidden"),e("contOverflowY","--non-extendable-content-cont-overflow-y","hidden"),e("contBorder","--non-extendable-content-cont-border","2px #fafafa solid"),e("contBorderRadius","--non-extendable-content-cont-border-radius","8px"),e("contColor","--non-extendable-content-cont-bg-color","#f5f5f5"),e("contShadow","--non-extendable-content-cont-shadow","0px 2px 5px #d0d0d0"),e("contPadding","--non-extendable-content-cont-padding","5px"),e("contHoverBorder","--non-extendable-content-cont-hover-border","2px #6a7ea5 dashed"),e("contHoverColor","--non-extendable-content-hover-bg-color","#f5f5f5"),e("contActiveBorder","--non-extendable-content-active-border","2px #6a7ea5 solid"),e("contActiveColor","--non-extendable-content-active-bg-color","#add8e6"),e("contentHeight","--non-extendable-content-content-height","100%"),e("contentWidth","--non-extendable-content-content-width","calc(100% - 8px)"),e("contentMaxHeight","--non-extendable-content-content-max-height","100%"),e("contentMaxWidth","--non-extendable-content-content-max-width","100%"),e("contentJustifyC","--non-extendable-content-content-justify-content","space-between"),e("contentAlignI","--non-extendable-content-content-align-items","center"),e("contentOverflowX","--non-extendable-content-content-overflow-x","hidden"),e("contentOverflowY","--non-extendable-content-content-overflow-y","hidden")}render(){const t=this.active?"active":"",e=this.hover?"hover":"";return p`<div
      id="container"
      part="container"
      class="${t} ${e}"
      @mouseenter=${this.handleMouseEnter}
      @mouseleave=${this.handleMouseLeave}
    >
      <slot id="content" part="content"></slot>
    </div> `}};u(n,"styles",x`
    :host {
      display: block;
      height: var(--non-extendable-content-comp-height, 39px);
      width: var(--non-extendable-content-comp-width, 500px);
      max-height: var(--non-extendable-content-comp-height, 39px);
      max-width: var(--non-extendable-content-comp-width, 500px);
    }

    #container {
      display: flex;
      flex-direction: column;
      justify-content: var(--non-extendable-content-justify-content, center);
      align-items: var(--non-extendable-content-align-items, center);

      height: var(--non-extendable-content-cont-height, 100%);
      width: var(--non-extendable-content-cont-width, 100%);

      overflow-x: var(--non-extendable-content-cont-overflow-x, hidden);
      overflow-y: var(--non-extendable-content-cont-overflow-y, hidden);

      border: var(--non-extendable-content-cont-border, 2px #fafafa solid);
      border-radius: var(--non-extendable-content-cont-border-radius, 8px);
      background-color: var(--non-extendable-content-cont-bg-color, #f5f5f5);
      box-shadow: var(
        --non-extendable-content-cont-shadow,
        0px 2px 5px #d0d0d0
      );

      box-sizing: border-box;
      padding: var(--non-extendable-content-cont-padding, 5px);
      gap: var(--non-extendable-content-top-bottom-gap, 5px);
    }

    #container:hover,
    #container.hover {
      border: var(
        --non-extendable-content-cont-hover-border,
        2px #6a7ea5 dashed
      );
      background-color: var(--non-extendable-content-hover-bg-color, #f5f5f5);
    }

    #container.active {
      border: var(--non-extendable-content-active-border, 2px #6a7ea5 solid);
      background-color: var(--non-extendable-content-active-bg-color, #add8e6);
    }

    #content {
      display: flex;

      justify-content: var(
        --non-extendable-content-content-justify-content,
        space-between
      );
      align-items: var(--non-extendable-content-content-align-items, center);

      height: var(--non-extendable-content-content-height, 100%);
      width: var(--non-extendable-content-content-width, calc(100% - 8px));
      max-height: var(--non-extendable-content-content-max-height, 100%);
      max-width: var(--non-extendable-content-content-max-width, 100%);

      overflow-x: var(--non-extendable-content-content-overflow-x, hidden);
      overflow-y: var(--non-extendable-content-content-overflow-y, hidden);
    }
  `);o([c({type:String})],n.prototype,"compHeight",2);o([c({type:String})],n.prototype,"compWidth",2);o([c({type:String})],n.prototype,"contHeight",2);o([c({type:String})],n.prototype,"contWidth",2);o([c({type:String})],n.prototype,"contJustifyC",2);o([c({type:String})],n.prototype,"contAlignI",2);o([c({type:String})],n.prototype,"contOverflowX",2);o([c({type:String})],n.prototype,"contOverflowY",2);o([c({type:String})],n.prototype,"contBorder",2);o([c({type:String})],n.prototype,"contBorderRadius",2);o([c({type:String})],n.prototype,"contColor",2);o([c({type:String})],n.prototype,"contShadow",2);o([c({type:String})],n.prototype,"contPadding",2);o([c({type:String})],n.prototype,"contHoverBorder",2);o([c({type:String})],n.prototype,"contHoverColor",2);o([c({type:String})],n.prototype,"contActiveBorder",2);o([c({type:String})],n.prototype,"contActiveColor",2);o([c({type:String})],n.prototype,"contentHeight",2);o([c({type:String})],n.prototype,"contentWidth",2);o([c({type:String})],n.prototype,"contentMaxHeight",2);o([c({type:String})],n.prototype,"contentMaxWidth",2);o([c({type:String})],n.prototype,"contentJustifyC",2);o([c({type:String})],n.prototype,"contentAlignI",2);o([c({type:String})],n.prototype,"contentOverflowX",2);o([c({type:String})],n.prototype,"contentOverflowY",2);o([c({type:Boolean})],n.prototype,"active",2);o([c({type:Boolean})],n.prototype,"hover",2);o([c({type:Function})],n.prototype,"handleMouseEnter",2);o([c({type:Function})],n.prototype,"handleMouseLeave",2);n=o([v("non-extendable-content")],n);const w={title:"Components/Content Panels/Non Extendable Content",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<non-extendable-content>`\n\nContent panel with customizable layout, hover, and active status.\n\nBehaves the same as `extendable-content`, but does not allow extending the content area.\n\n#### CSS Custom Properties\n\n| Variable                                         | Description                              |\n|--------------------------------------------------|------------------------------------------|\n| `--non-extendable-content-comp-height`          | Component height                         |\n| `--non-extendable-content-comp-width`           | Component width                          |\n| `--non-extendable-content-cont-height`          | Container height                         |\n| `--non-extendable-content-cont-width`           | Container width                          |\n| `--non-extendable-content-cont-justify-content` | Container justify-content                |\n| `--non-extendable-content-cont-align-items`     | Container align-items                    |\n| `--non-extendable-content-cont-overflow-x`      | Container overflow-x                     |\n| `--non-extendable-content-cont-overflow-y`      | Container overflow-y                     |\n| `--non-extendable-content-cont-border`          | Container border                         |\n| `--non-extendable-content-cont-border-radius`   | Container border radius                  |\n| `--non-extendable-content-cont-bg-color`        | Container background color               |\n| `--non-extendable-content-cont-shadow`          | Container box shadow                     |\n| `--non-extendable-content-cont-padding`         | Container padding                        |\n| `--non-extendable-content-cont-hover-border`    | Container border on hover                |\n| `--non-extendable-content-hover-bg-color`       | Container background color on hover      |\n| `--non-extendable-content-active-border`        | Container border when active             |\n| `--non-extendable-content-active-bg-color`      | Container background color when active   |\n| `--non-extendable-content-content-height`       | Content height                           |\n| `--non-extendable-content-content-width`        | Content width                            |\n| `--non-extendable-content-content-max-height`   | Content max height                       |\n| `--non-extendable-content-content-max-width`    | Content max width                        |\n| `--non-extendable-content-content-justify-content` | Content justify-content              |\n| `--non-extendable-content-content-align-items`  | Content align-items                      |\n| `--non-extendable-content-content-overflow-x`   | Content overflow-x                       |\n| `--non-extendable-content-content-overflow-y`   | Content overflow-y                       |\n\n#### Shadow DOM Parts\n\n| Part Name    | Element      | Description           |\n|--------------|--------------|-----------------------|\n| `container` | `#container` | Main container        |\n| `content`   | slot         | Content slot          |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{category:"Layout",defaultValue:{summary:"39px"}}},compWidth:{control:"text",description:"Width of the outer component container",table:{category:"Layout",defaultValue:{summary:"500px"}}},contHeight:{control:"text",description:"Height of the container",table:{category:"Container",defaultValue:{summary:"100%"}}},contWidth:{control:"text",description:"Width of the container",table:{category:"Container",defaultValue:{summary:"100%"}}},contJustifyC:{control:"text",description:"Justify content of the container",table:{category:"Container",defaultValue:{summary:"center"}}},contAlignI:{control:"text",description:"Align items of the container",table:{category:"Container",defaultValue:{summary:"center"}}},contOverflowX:{control:"text",description:"Overflow-x of the container",table:{category:"Container",defaultValue:{summary:"hidden"}}},contOverflowY:{control:"text",description:"Overflow-y of the container",table:{category:"Container",defaultValue:{summary:"hidden"}}},contBorder:{control:"text",description:"Border of the container",table:{category:"Container",defaultValue:{summary:"2px #fafafa solid"}}},contBorderRadius:{control:"text",description:"Border radius of the container",table:{category:"Container",defaultValue:{summary:"8px"}}},contColor:{control:"color",description:"Background color of the container",table:{category:"Container",defaultValue:{summary:"#f5f5f5"}}},contShadow:{control:"text",description:"Box shadow of the container",table:{category:"Container",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},contPadding:{control:"text",description:"Padding of the container",table:{category:"Container",defaultValue:{summary:"5px"}}},contHoverBorder:{control:"text",description:"Border of the container on hover",table:{category:"Container",defaultValue:{summary:"2px #6a7ea5 dashed"}}},contHoverColor:{control:"color",description:"Background color of the container on hover",table:{category:"Container",defaultValue:{summary:"#f5f5f5"}}},contActiveBorder:{control:"text",description:"Border of the container when active",table:{category:"Container",defaultValue:{summary:"2px #6a7ea5 solid"}}},contActiveColor:{control:"color",description:"Background color of the container when active",table:{category:"Container",defaultValue:{summary:"#add8e6"}}},contentHeight:{control:"text",description:"Height of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentWidth:{control:"text",description:"Width of the content area",table:{category:"Content",defaultValue:{summary:"calc(100% - 8px)"}}},contentMaxHeight:{control:"text",description:"Max height of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentMaxWidth:{control:"text",description:"Max width of the content area",table:{category:"Content",defaultValue:{summary:"100%"}}},contentJustifyC:{control:"text",description:"Justify content of the content area",table:{category:"Content",defaultValue:{summary:"space-between"}}},contentAlignI:{control:"text",description:"Align items of the content area",table:{category:"Content",defaultValue:{summary:"center"}}},contentOverflowX:{control:"text",description:"Overflow-x of the content area",table:{category:"Content",defaultValue:{summary:"hidden"}}},contentOverflowY:{control:"text",description:"Overflow-y of the content area",table:{category:"Content",defaultValue:{summary:"hidden"}}},active:{control:"boolean",description:"Whether the panel is active (shows active border/color)",table:{category:"State",defaultValue:{summary:"false"}}},hover:{control:"boolean",description:"Whether the panel is hovered (shows hover border/color)",table:{category:"State",defaultValue:{summary:"false"}}}}},d=t=>p`
  <non-extendable-content
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .contHeight=${t.contHeight}
    .contWidth=${t.contWidth}
    .contJustifyC=${t.contJustifyC}
    .contAlignI=${t.contAlignI}
    .contOverflowX=${t.contOverflowX}
    .contOverflowY=${t.contOverflowY}
    .contBorder=${t.contBorder}
    .contBorderRadius=${t.contBorderRadius}
    .contColor=${t.contColor}
    .contShadow=${t.contShadow}
    .contPadding=${t.contPadding}
    .contHoverBorder=${t.contHoverBorder}
    .contHoverColor=${t.contHoverColor}
    .contActiveBorder=${t.contActiveBorder}
    .contActiveColor=${t.contActiveColor}
    .contentHeight=${t.contentHeight}
    .contentWidth=${t.contentWidth}
    .contentMaxHeight=${t.contentMaxHeight}
    .contentMaxWidth=${t.contentMaxWidth}
    .contentJustifyC=${t.contentJustifyC}
    .contentAlignI=${t.contentAlignI}
    .contentOverflowX=${t.contentOverflowX}
    .contentOverflowY=${t.contentOverflowY}
    .active=${t.active}
    .hover=${t.hover}
  >
    <div>This is non-extendable content.</div>
  </non-extendable-content>
`;d.args={compHeight:"39px",compWidth:"500px",contHeight:"100%",contWidth:"100%",contJustifyC:"center",contAlignI:"center",contOverflowX:"hidden",contOverflowY:"hidden",contBorder:"2px #fafafa solid",contBorderRadius:"8px",contColor:"#f5f5f5",contShadow:"0px 2px 5px #d0d0d0",contPadding:"5px",contHoverBorder:"2px #6a7ea5 dashed",contHoverColor:"#f5f5f5",contActiveBorder:"2px #6a7ea5 solid",contActiveColor:"#add8e6",contentHeight:"100%",contentWidth:"calc(100% - 8px)",contentMaxHeight:"100%",contentMaxWidth:"100%",contentJustifyC:"space-between",contentAlignI:"center",contentOverflowX:"hidden",contentOverflowY:"hidden",active:!1,hover:!1};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
  <non-extendable-content
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contHeight=\${args.contHeight}
    .contWidth=\${args.contWidth}
    .contJustifyC=\${args.contJustifyC}
    .contAlignI=\${args.contAlignI}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .contBorder=\${args.contBorder}
    .contBorderRadius=\${args.contBorderRadius}
    .contColor=\${args.contColor}
    .contShadow=\${args.contShadow}
    .contPadding=\${args.contPadding}
    .contHoverBorder=\${args.contHoverBorder}
    .contHoverColor=\${args.contHoverColor}
    .contActiveBorder=\${args.contActiveBorder}
    .contActiveColor=\${args.contActiveColor}
    .contentHeight=\${args.contentHeight}
    .contentWidth=\${args.contentWidth}
    .contentMaxHeight=\${args.contentMaxHeight}
    .contentMaxWidth=\${args.contentMaxWidth}
    .contentJustifyC=\${args.contentJustifyC}
    .contentAlignI=\${args.contentAlignI}
    .contentOverflowX=\${args.contentOverflowX}
    .contentOverflowY=\${args.contentOverflowY}
    .active=\${args.active}
    .hover=\${args.hover}
  >
    <div>This is non-extendable content.</div>
  </non-extendable-content>
\``,...d.parameters?.docs?.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,w as default};
