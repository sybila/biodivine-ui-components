import{i as w,a as f,x as h}from"./iframe-rZNKRr2j.js";import{n as a,t as m}from"./property-BsoqjfFA.js";import{r as u}from"./state-D4z6AKSH.js";import"./loading-indicator-wl8eijg0.js";import"./text-button-BVR9LO-8.js";var s=Object.defineProperty,y=Object.getOwnPropertyDescriptor,x=(o,t,r)=>t in o?s(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,n=(o,t,r,p)=>{for(var i=p>1?void 0:p?y(t,r):t,l=o.length-1,c;l>=0;l--)(c=o[l])&&(i=(p?c(t,r,i):c(i))||i);return p&&i&&s(t,r,i),i},v=(o,t,r)=>x(o,t+"",r);class b{instance=null;findGlobalLoading(){if(this.instance)return this.instance;const t=document.querySelector("loading-wrapper");return t?(this.instance=t,t):null}startLoading(){const t=this.findGlobalLoading();t&&t.setVisible(!0)}endLoading(){const t=this.findGlobalLoading();t&&t.setVisible(!1)}}const g=new b;let e=class extends f{setVisible(o){this.visible=o}updateStyleVariable(o,t,r){const p=this[o]??r;this.style.setProperty(t,p)}updated(o){const t=(r,p,i)=>o.has(r)&&this.updateStyleVariable(r,p,i);t("compHeight","--loading-wrapper-comp-height","100%"),t("compWidth","--loading-wrapper-comp-width","100%"),t("compZindex","--loading-wrapper-z-index","1000000000"),t("wrapperHeight","--loading-wrapper-height","100%"),t("wrapperWidth","--loading-wrapper-width","100%"),t("wrapperOverflowX","--loading-wrapper-overflow-x","hidden"),t("wrapperOverflowY","--loading-wrapper-overflow-y","hidden"),t("loadContHeight","--loading-wrapper-container-height","fit-content"),t("loadContWidth","--loading-wrapper-container-width","fit-content"),t("loadContTop","--loading-wrapper-container-top","20px"),t("loadContBottom","--loading-wrapper-container-bottom","auto"),t("loadContLeft","--loading-wrapper-container-left","50%"),t("loadContRight","--loading-wrapper-container-right","50%"),t("contentHeight","--loading-wrapper-content-height","100%"),t("contentWidth","--loading-wrapper-content-width","100%"),t("contentZindex","--loading-wrapper-content-z-index","1")}render(){return h`
      <div id="outer-wrapper" part="outer-wrapper">
        <div
          id="loading-container"
          part="loading-container"
          class="${this.visible?"visible":""}"
        >
          <slot name="loading-component" part="loading-component"></slot>
        </div>

        <slot id="content" part="content"></slot>
      </div>
    `}};v(e,"styles",w`
    :host {
      display: block;
      height: var(--loading-wrapper-comp-height, 100%);
      width: var(--loading-wrapper-comp-width, 100%);
      max-height: var(--loading-wrapper-comp-height, 100%);
      max-width: var(--loading-wrapper-comp-width, 100%);
    }

    #outer-wrapper {
      display: block;
      height: var(--loading-wrapper-height, 100%);
      width: var(--loading-wrapper-width, 100%);
      position: relative;
      overflow-x: var(--loading-wrapper-overflow-x, hidden);
      overflow-y: var(--loading-wrapper-overflow-y, hidden);
    }

    #loading-container {
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--loading-wrapper-container-height, fit-content);
      width: var(--loading-wrapper-container-width, fit-content);
      box-sizing: border-box;
      position: absolute;
      top: var(--loading-wrapper-container-top, 20px);
      bottom: var(--loading-wrapper-container-bottom, auto);
      left: var(--loading-wrapper-container-left, 50%);
      right: var(--loading-wrapper-container-right, 50%);
      border-radius: 24px;

      transition:
        opacity 0.4s ease,
        transform 0.4s ease;

      pointer-events: none;
      transform: translate(-50%);
      z-index: var(--loading-wrapper-z-index, 999999999);
    }

    #loading-container.visible {
      opacity: 1;
    }

    #content {
      display: block;
      height: var(--loading-wrapper-content-height, 100%);
      width: var(--loading-wrapper-content-width, 100%);
      position: relative;
      z-index: var(--loading-wrapper-content-z-index, 1);
    }
  `);n([a({type:String})],e.prototype,"compHeight",2);n([a({type:String})],e.prototype,"compWidth",2);n([a({type:String})],e.prototype,"compZindex",2);n([a({type:String})],e.prototype,"wrapperHeight",2);n([a({type:String})],e.prototype,"wrapperWidth",2);n([a({type:String})],e.prototype,"wrapperOverflowX",2);n([a({type:String})],e.prototype,"wrapperOverflowY",2);n([a({type:String})],e.prototype,"loadContHeight",2);n([a({type:String})],e.prototype,"loadContWidth",2);n([a({type:String})],e.prototype,"loadContTop",2);n([a({type:String})],e.prototype,"loadContBottom",2);n([a({type:String})],e.prototype,"loadContLeft",2);n([a({type:String})],e.prototype,"loadContRight",2);n([a({type:String})],e.prototype,"contentHeight",2);n([a({type:String})],e.prototype,"contentWidth",2);n([a({type:String})],e.prototype,"contentZindex",2);n([u()],e.prototype,"visible",2);e=n([m("loading-wrapper")],e);const S={title:"Components/Utilities/Loading Wrapper",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<loading-wrapper>`\n\nA global loading overlay component. Place once at the root of your app and control visibility via the global `Loading` handler.\n\n#### CSS Custom Properties\n\n| Variable                                   | Description                              |\n|--------------------------------------------|------------------------------------------|\n| `--loading-wrapper-comp-height`           | Height of the outer wrapper component     |\n| `--loading-wrapper-comp-width`            | Width of the outer wrapper component      |\n| `--loading-wrapper-z-index`               | Z-index for loading overlay               |\n| `--loading-wrapper-height`                | Height of the wrapper container           |\n| `--loading-wrapper-width`                 | Width of the wrapper container            |\n| `--loading-wrapper-overflow-x`            | Overflow-x of the wrapper container       |\n| `--loading-wrapper-overflow-y`            | Overflow-y of the wrapper container       |\n| `--loading-wrapper-container-height`      | Height of the loading component container |\n| `--loading-wrapper-container-width`       | Width of the loading component container  |\n| `--loading-wrapper-container-top`         | Top offset of the loading container       |\n| `--loading-wrapper-container-bottom`      | Bottom offset of the loading container    |\n| `--loading-wrapper-container-left`        | Left offset of the loading container      |\n| `--loading-wrapper-container-right`       | Right offset of the loading container     |\n| `--loading-wrapper-content-height`        | Height of the content area                |\n| `--loading-wrapper-content-width`         | Width of the content area                 |\n| `--loading-wrapper-content-z-index`       | Z-index of the content area               |\n\n#### Shadow DOM Parts\n\n| Part Name          | Element             | Description                          |\n|--------------------|---------------------|--------------------------------------|\n| `outer-wrapper`    | Outer container      | Full-screen container                |\n| `loading-container` | Inner loading box    | Centered overlay for slot content    |\n| `loading-component` | Slot content         | Your actual loading spinner/message  |\n| `content`           | Slot content         | Main content area                    |\n\n---\n\n### Global `Loading` Handler\n\nYou can control visibility with the global handler:\n\n- `Loading.startLoading()` — Shows the loading overlay.\n- `Loading.endLoading()` — Hides the loading overlay.\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer wrapper component",table:{defaultValue:{summary:"100%"},category:"Layout"}},compWidth:{control:"text",description:"Width of the outer wrapper component",table:{defaultValue:{summary:"100%"},category:"Layout"}},compZindex:{control:"text",description:"Z-index for loading overlay",table:{defaultValue:{summary:"1000000000"},category:"Layout"}},wrapperHeight:{control:"text",description:"Height of the wrapper container",table:{defaultValue:{summary:"100%"},category:"Wrapper"}},wrapperWidth:{control:"text",description:"Width of the wrapper container",table:{defaultValue:{summary:"100%"},category:"Wrapper"}},wrapperOverflowX:{control:"text",description:"Overflow-x of the wrapper container",table:{defaultValue:{summary:"hidden"},category:"Wrapper"}},wrapperOverflowY:{control:"text",description:"Overflow-y of the wrapper container",table:{defaultValue:{summary:"hidden"},category:"Wrapper"}},loadContHeight:{control:"text",description:"Height of the loading component container",table:{defaultValue:{summary:"fit-content"},category:"Loading"}},loadContWidth:{control:"text",description:"Width of the loading component container",table:{defaultValue:{summary:"fit-content"},category:"Loading"}},loadContTop:{control:"text",description:"Top offset of the loading container",table:{defaultValue:{summary:"20px"},category:"Loading"}},loadContBottom:{control:"text",description:"Bottom offset of the loading container",table:{defaultValue:{summary:"auto"},category:"Loading"}},loadContLeft:{control:"text",description:"Left offset of the loading container",table:{defaultValue:{summary:"50%"},category:"Loading"}},loadContRight:{control:"text",description:"Right offset of the loading container",table:{defaultValue:{summary:"50%"},category:"Loading"}},contentHeight:{control:"text",description:"Height of the content area",table:{defaultValue:{summary:"100%"},category:"Content"}},contentWidth:{control:"text",description:"Width of the content area",table:{defaultValue:{summary:"100%"},category:"Content"}},contentZindex:{control:"text",description:"Z-index of the content area",table:{defaultValue:{summary:"1"},category:"Content"}}}},d=o=>h`
  <div
    style="border: 1px solid #ccc; height: ${o.compHeight}; width: ${o.compWidth}; position: relative;"
  >
    <loading-wrapper
      .compHeight=${o.compHeight}
      .compWidth=${o.compWidth}
      .compZindex=${o.compZindex}
      .wrapperHeight=${o.wrapperHeight}
      .wrapperWidth=${o.wrapperWidth}
      .wrapperOverflowX=${o.wrapperOverflowX}
      .wrapperOverflowY=${o.wrapperOverflowY}
      .loadContHeight=${o.loadContHeight}
      .loadContWidth=${o.loadContWidth}
      .loadContTop=${o.loadContTop}
      .loadContBottom=${o.loadContBottom}
      .loadContLeft=${o.loadContLeft}
      .loadContRight=${o.loadContRight}
      .contentHeight=${o.contentHeight}
      .contentWidth=${o.contentWidth}
      .contentZindex=${o.contentZindex}
    >
      <loading-indicator
        loadingMessage="Loading..."
        slot="loading-component"
      ></loading-indicator>

      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 16px;
          padding: 10px;
        "
      >
        <text-button
          text="Start Loading"
          compHeight="40px"
          compWidth="100px"
          .handleClick=${()=>g.startLoading()}
        ></text-button>
        <text-button
          text="Stop Loading"
          compHeight="40px"
          compWidth="100px"
          .handleClick=${()=>g.endLoading()}
        ></text-button>
      </div>
    </loading-wrapper>
  </div>
`;d.args={compHeight:"400px",compWidth:"400px",compZindex:"1000000000",wrapperHeight:"100%",wrapperWidth:"100%",wrapperOverflowX:"hidden",wrapperOverflowY:"hidden",loadContHeight:"fit-content",loadContWidth:"fit-content",loadContTop:"20px",loadContBottom:"auto",loadContLeft:"50%",loadContRight:"50%",contentHeight:"100%",contentWidth:"100%",contentZindex:"1"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => html\`
  <div
    style="border: 1px solid #ccc; height: \${args.compHeight}; width: \${args.compWidth}; position: relative;"
  >
    <loading-wrapper
      .compHeight=\${args.compHeight}
      .compWidth=\${args.compWidth}
      .compZindex=\${args.compZindex}
      .wrapperHeight=\${args.wrapperHeight}
      .wrapperWidth=\${args.wrapperWidth}
      .wrapperOverflowX=\${args.wrapperOverflowX}
      .wrapperOverflowY=\${args.wrapperOverflowY}
      .loadContHeight=\${args.loadContHeight}
      .loadContWidth=\${args.loadContWidth}
      .loadContTop=\${args.loadContTop}
      .loadContBottom=\${args.loadContBottom}
      .loadContLeft=\${args.loadContLeft}
      .loadContRight=\${args.loadContRight}
      .contentHeight=\${args.contentHeight}
      .contentWidth=\${args.contentWidth}
      .contentZindex=\${args.contentZindex}
    >
      <loading-indicator
        loadingMessage="Loading..."
        slot="loading-component"
      ></loading-indicator>

      <div
        style="
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: end;
          gap: 16px;
          padding: 10px;
        "
      >
        <text-button
          text="Start Loading"
          compHeight="40px"
          compWidth="100px"
          .handleClick=\${() => Loading.startLoading()}
        ></text-button>
        <text-button
          text="Stop Loading"
          compHeight="40px"
          compWidth="100px"
          .handleClick=\${() => Loading.endLoading()}
        ></text-button>
      </div>
    </loading-wrapper>
  </div>
\``,...d.parameters?.docs?.source}}};const O=["Default"];export{d as Default,O as __namedExportsOrder,S as default};
