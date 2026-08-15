import{i as y,a as g,x as l}from"./iframe-CePmm_jb.js";import{n as a,t as v}from"./property-bLZeg_ry.js";var s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,x=(e,o,i)=>o in e?s(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,n=(e,o,i,d)=>{for(var r=d>1?void 0:d?u(o,i):o,h=e.length-1,w;h>=0;h--)(w=e[h])&&(r=(d?w(o,i,r):w(r))||r);return d&&r&&s(o,i,r),r},p=(e,o,i)=>x(e,typeof o!="symbol"?o+"":o,i);let t=class extends g{updateStyleVariable(e,o,i){const d=this[e]??i;this.style.setProperty(o,d)}updated(e){const o=(i,d,r)=>e.has(i)&&this.updateStyleVariable(i,d,r);o("compHeight","--overlay-window-comp-height","100vh"),o("compWidth","--overlay-window-comp-width","100vw"),o("compZIndex","--overlay-window-comp-z-index","999999990"),o("compBackgroundColor","--overlay-window-background-color","rgba(0, 0, 0, 0.3)"),o("windMinHeight","--overlay-window-min-height","1vh"),o("windMinWidth","--overlay-window-min-width","1vh"),o("windMaxHeight","--overlay-window-max-height","90vh"),o("windMaxWidth","--overlay-window-max-width","90vh"),o("windPad","--overlay-window-padding","8px"),o("gapSize","--overlay-window-gap","5px"),o("windColor","--overlay-window-bg-color","#f5f5f5"),o("windShadow","--overlay-window-shadow","0px 2px 5px #d0d0d0"),o("headerHeight","--overlay-window-header-height","fit-content"),o("headerWidth","--overlay-window-header-width","100%"),o("headerGap","--overlay-window-header-gap","5px"),o("headerTextFontSize","--overlay-window-tag-font-size","24px"),o("headerTextFontWeight","--overlay-window-tag-font-weight","bold"),o("headerTextFontFamily","--overlay-window-tag-font-family","'Helvetica', 'Arial', sans-serif"),o("headerTextShadow","--overlay-window-tag-text-shadow","0px 2px 5px #d0d0d0"),o("headerTextColor","--overlay-window-tag-color","black"),o("headerTextTransform","--overlay-window-tag-text-transform","none"),o("closeHeight","--overlay-window-close-height","fit-content"),o("closeWidth","--overlay-window-close-width","fit-content"),o("closeHoverColor","--overlay-window-close-hover-color","#cfd8dc"),o("closeIconHeight","--overlay-window-close-icon-height","fit-content"),o("closeIconWidth","--overlay-window-close-icon-width","fit-content"),o("contentJustifyC","--overlay-window-content-justify-content","start"),o("contentAlignI","--overlay-window-content-align-items","center"),o("contentGap","--overlay-window-content-gap","5px"),o("contentOverflowY","--overlay-window-content-overflow-y","auto")}render(){return l`
      <div
        id="background"
        part="background"
        @click=${e=>{e.target===e.currentTarget&&this.handleBackgroundClick&&this.handleBackgroundClick()}}
      >
        <div id="window" part="window">
          ${this.showHeader?l`<div id="header" part="header">
                ${this.showCloseButton?l`<div id="close-button" part="close-button" @click=${this.handleCloseClick}>
                    <img id="close-button-icon" part="close-button-icon" src=${this.closeButtonSrc??t.closeIcon} ></img>
                </div>`:l`<div></div>`}
                <p id="header-text" part="header-text">
                  ${this.headerText??""}
                </p>
                <div></div>
              </div>`:""}
          <slot part="content"></slot>
        </div>
      </div>
    `}};p(t,"styles",y`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: var(--overlay-window-comp-height, 100vh);
      width: var(--overlay-window-comp-width, 100vw);
      z-index: var(--overlay-window-comp-z-index, 999999990);
    }

    #background {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(
        --overlay-window-background-color,
        rgba(0, 0, 0, 0.3)
      );
      overflow: hidden;
    }

    #window {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      max-height: var(--overlay-window-max-height, 90vh);
      max-width: var(--overlay-window-max-width, 90vw);
      min-height: var(--overlay-window-min-height, 1vh);
      min-width: var(--overlay-window-min-width, 1vw);
      padding: var(--overlay-window-padding, 8px);
      gap: var(--overlay-window-gap, 5px);
      border-radius: 8px;
      background-color: var(--overlay-window-bg-color, #f5f5f5);
      box-shadow: var(--overlay-window-shadow, 0px 2px 5px #d0d0d0);
      overflow-x: hidden;
      overflow-y: hidden;
      resize: none;
      box-sizing: border-box;
      pointer-events: auto;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--overlay-window-header-height, fit-content);
      width: var(--overlay-window-header-width, 100%);
      gap: var(--overlay-window-header-gap, 5px);
    }

    #header-text {
      margin: 0;
      font-size: var(--overlay-window-tag-font-size, 24px);
      font-weight: var(--overlay-window-tag-font-weight, bold);
      font-family: var(
        --overlay-window-tag-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--overlay-window-tag-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--overlay-window-tag-color, black);
      text-transform: var(--overlay-window-tag-text-transform, none);
      cursor: default;
    }

    #close-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--overlay-window-close-height, fit-content);
      width: var(--overlay-window-close-width, fit-content);
      border-radius: 8px;
      background-color: var(--overlay-window-bg-color, #f5f5f5);
      transition: background-color 0.3s;
    }

    #close-button:hover {
      background-color: var(--overlay-window-close-hover-color, #cfd8dc);
    }

    #close-button-icon {
      height: var(--overlay-window-close-icon-height, fit-content);
      width: var(--overlay-window-close-icon-width, fit-content);
      max-height: var(--overlay-window-close-icon-height, fit-content);
      max-width: var(--overlay-window-close-icon-width, fit-content);
    }

    slot {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      justify-content: var(--overlay-window-content-justify-content, start);
      align-items: var(--overlay-window-content-align-items, center);
      overflow-x: hidden;
      overflow-y: var(--overlay-window-content-overflow-y, auto);
      gap: var(--overlay-window-content-gap, 5px);
    }
  `);p(t,"closeIcon","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");n([a({type:String})],t.prototype,"compHeight",2);n([a({type:String})],t.prototype,"compWidth",2);n([a({type:String})],t.prototype,"compZIndex",2);n([a({type:String})],t.prototype,"compBackgroundColor",2);n([a({type:Function})],t.prototype,"handleBackgroundClick",2);n([a({type:String})],t.prototype,"windMinHeight",2);n([a({type:String})],t.prototype,"windMinWidth",2);n([a({type:String})],t.prototype,"windMaxHeight",2);n([a({type:String})],t.prototype,"windMaxWidth",2);n([a({type:String})],t.prototype,"windPad",2);n([a({type:String})],t.prototype,"windColor",2);n([a({type:String})],t.prototype,"windShadow",2);n([a({type:Boolean})],t.prototype,"showHeader",2);n([a({type:String})],t.prototype,"headerHeight",2);n([a({type:String})],t.prototype,"headerWidth",2);n([a({type:String})],t.prototype,"headerGap",2);n([a({type:String})],t.prototype,"headerText",2);n([a({type:String})],t.prototype,"headerTextFontSize",2);n([a({type:String})],t.prototype,"headerTextFontWeight",2);n([a({type:String})],t.prototype,"headerTextFontFamily",2);n([a({type:String})],t.prototype,"headerTextColor",2);n([a({type:String})],t.prototype,"headerTextShadow",2);n([a({type:String})],t.prototype,"headerTextTransform",2);n([a({type:Boolean})],t.prototype,"showCloseButton",2);n([a({type:Function})],t.prototype,"handleCloseClick",2);n([a({type:String})],t.prototype,"closeButtonSrc",2);n([a({type:String})],t.prototype,"closeHeight",2);n([a({type:String})],t.prototype,"closeWidth",2);n([a({type:String})],t.prototype,"closeHoverColor",2);n([a({type:String})],t.prototype,"closeIconHeight",2);n([a({type:String})],t.prototype,"closeIconWidth",2);n([a({type:String})],t.prototype,"contentJustifyC",2);n([a({type:String})],t.prototype,"contentAlignI",2);n([a({type:String})],t.prototype,"contentGap",2);n([a({type:String})],t.prototype,"contentOverflowY",2);n([a({type:String})],t.prototype,"gapSize",2);t=n([v("overlay-window")],t);const b={title:"Components/Content Panels/Overlay Window",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<overlay-window>`\n\nA flexible overlay/modal window component.\n\nThe window consists of a header area and a content area. The content area automatically expands to fill all remaining available space within the window. As the window grows, the content stretches to occupy the available width and height.\n\nWhen the window reaches its maximum height, additional vertical content no longer increases the window size. Instead, the content area becomes vertically scrollable while the header remains visible. Horizontal scrolling is disabled, and content is expected to fit within the available width or handle overflow internally.\n\n#### CSS Custom Properties\n\n| Variable | Description |\n|----------|-------------|\n| `--overlay-window-comp-height` | Height of the overlay window component (doesn't support fit-content or auto)|\n| `--overlay-window-comp-width` | Width of the overlay window component (doesn't support fit-content or auto)|\n| `--overlay-window-comp-z-index` | Z-index of the overlay window |\n| `--overlay-window-background-color` | Background color of the overlay |\n| `--overlay-window-min-height` | Min height of the window panel |\n| `--overlay-window-min-width` | Min width of the window panel |\n| `--overlay-window-max-height` | Max height of the window panel |\n| `--overlay-window-max-width` | Max width of the window panel |\n| `--overlay-window-padding` | Padding of the window panel |\n| `--overlay-window-gap` | Gap between window sections |\n| `--overlay-window-bg-color` | Background color of the window panel |\n| `--overlay-window-shadow` | Box shadow of the window panel |\n| `--overlay-window-overflow-x` | Overflow-x of the window panel |\n| `--overlay-window-overflow-y` | Overflow-y of the window panel |\n| `--overlay-window-header-height` | Height of the header |\n| `--overlay-window-header-width` | Width of the header |\n| `--overlay-window-header-gap` | Gap in the header |\n| `--overlay-window-tag-font-size` | Header text font size |\n| `--overlay-window-tag-font-weight` | Header text font weight |\n| `--overlay-window-tag-font-family` | Header text font family |\n| `--overlay-window-tag-text-shadow` | Header text shadow |\n| `--overlay-window-tag-color` | Header text color |\n| `--overlay-window-tag-text-transform` | Header text transform |\n| `--overlay-window-close-height` | Height of the close button |\n| `--overlay-window-close-width` | Width of the close button |\n| `--overlay-window-close-hover-color` | Hover color of the close button |\n| `--overlay-window-close-icon-height` | Height of the close icon |\n| `--overlay-window-close-icon-width` | Width of the close icon |\n| `--overlay-window-content-justify-content` | Justify content in the content area |\n| `--overlay-window-content-align-items` | Align items in the content area |\n| `--overlay-window-content-overflow-y` | Overflow-y of the content area |\n| `--overlay-window-content-gap` | Gap in the content area |\n\n#### Shadow DOM Parts\n\n| Part Name         | Description                                 |\n|-------------------|---------------------------------------------|\n| `background`    | The overlay background                      |\n| `window`        | The main window panel                       |\n| `header`        | The header area                             |\n| `header-text`   | The header text element                     |\n| `close-button`  | The close button container                  |\n| `close-button-icon` | The close icon image                   |\n| `content`       | The slot for window content                 |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the overlay window component",table:{defaultValue:{summary:"100vh"},category:"Layout"}},compWidth:{control:"text",description:"Width of the overlay window component",table:{defaultValue:{summary:"100vw"},category:"Layout"}},compZIndex:{control:"text",description:"Z-index of the overlay window",table:{defaultValue:{summary:"999999990"},category:"Layout"}},compBackgroundColor:{control:"color",description:"Background color of the overlay",table:{defaultValue:{summary:"rgba(0, 0, 0, 0.3)"},category:"Background"}},handleBackgroundClick:{action:"backgroundClick",description:"Function to handle background click",table:{category:"Events"}},windMinHeight:{control:"text",description:"Min height of the window panel ",table:{defaultValue:{summary:"1vh"},category:"Window"}},windMinWidth:{control:"text",description:"Min width of the window panel",table:{defaultValue:{summary:"1vw"},category:"Window"}},windMaxHeight:{control:"text",description:"Max height of the window panel",table:{defaultValue:{summary:"90vh"},category:"Window"}},windMaxWidth:{control:"text",description:"Max width of the window panel",table:{defaultValue:{summary:"90vw"},category:"Window"}},windPad:{control:"text",description:"Padding of the window panel",table:{defaultValue:{summary:"8px"},category:"Window"}},windColor:{control:"color",description:"Background color of the window panel",table:{defaultValue:{summary:"#f5f5f5"},category:"Window"}},windShadow:{control:"text",description:"Box shadow of the window panel",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Window"}},showHeader:{control:"boolean",description:"Show the header section",table:{defaultValue:{summary:"true"},category:"Header"}},headerHeight:{control:"text",description:"Height of the header",table:{defaultValue:{summary:"fit-content"},category:"Header"}},headerGap:{control:"text",description:"Gap in the header",table:{defaultValue:{summary:"5px"},category:"Header"}},headerText:{control:"text",description:"Header text",table:{defaultValue:{summary:""},category:"Header"}},headerTextFontSize:{control:"text",description:"Header text font size",table:{defaultValue:{summary:"24px"},category:"Header"}},headerTextFontWeight:{control:"text",description:"Header text font weight",table:{defaultValue:{summary:"bold"},category:"Header"}},headerTextFontFamily:{control:"text",description:"Header text font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Header"}},headerTextColor:{control:"color",description:"Header text color",table:{defaultValue:{summary:"black"},category:"Header"}},headerTextShadow:{control:"text",description:"Header text shadow",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Header"}},headerTextTransform:{control:"text",description:"Header text transform",table:{defaultValue:{summary:"none"},category:"Header"}},showCloseButton:{control:"boolean",description:"Show the close button",table:{defaultValue:{summary:"true"},category:"Header"}},handleCloseClick:{action:"closeClick",description:"Function to handle close button click",table:{category:"Events"}},closeButtonSrc:{control:"text",description:"Source URL for the close button icon",table:{defaultValue:{summary:void 0},category:"Header"}},closeHeight:{control:"text",description:"Height of the close button",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeWidth:{control:"text",description:"Width of the close button",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeHoverColor:{control:"color",description:"Hover color of the close button",table:{defaultValue:{summary:"#cfd8dc"},category:"Header"}},closeIconHeight:{control:"text",description:"Height of the close icon",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeIconWidth:{control:"text",description:"Width of the close icon",table:{defaultValue:{summary:"fit-content"},category:"Header"}},contentJustifyC:{control:"text",description:"Justify content in the content area",table:{defaultValue:{summary:"start"},category:"Content"}},contentAlignI:{control:"text",description:"Align items in the content area",table:{defaultValue:{summary:"center"},category:"Content"}},contentGap:{control:"text",description:"Gap in the content area",table:{defaultValue:{summary:"5px"},category:"Content"}},contentOverflowY:{control:"text",description:"Overflow-y of the content area",table:{defaultValue:{summary:"auto"},category:"Content"}},gapSize:{control:"text",description:"Gap size between window sections",table:{defaultValue:{summary:"5px"},category:"Window"}}}},c=e=>l`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <overlay-window
      .compHeight=${e.compHeight}
      .compWidth=${e.compWidth}
      .compZIndex=${e.compZIndex}
      .compBackgroundColor=${e.compBackgroundColor}
      .handleBackgroundClick=${e.handleBackgroundClick}
      .windMinHeight=${e.windMinHeight}
      .windMinWidth=${e.windMinWidth}
      .windMaxHeight=${e.windMaxHeight}
      .windMaxWidth=${e.windMaxWidth}
      .windPad=${e.windPad}
      .windColor=${e.windColor}
      .windShadow=${e.windShadow}
      .showHeader=${e.showHeader}
      .headerHeight=${e.headerHeight}
      .headerGap=${e.headerGap}
      .headerText=${e.headerText}
      .headerTextFontSize=${e.headerTextFontSize}
      .headerTextFontWeight=${e.headerTextFontWeight}
      .headerTextFontFamily=${e.headerTextFontFamily}
      .headerTextColor=${e.headerTextColor}
      .headerTextShadow=${e.headerTextShadow}
      .headerTextTransform=${e.headerTextTransform}
      .showCloseButton=${e.showCloseButton}
      .handleCloseClick=${e.handleCloseClick}
      .closeButtonSrc=${e.closeButtonSrc}
      .closeHeight=${e.closeHeight}
      .closeWidth=${e.closeWidth}
      .closeHoverColor=${e.closeHoverColor}
      .closeIconHeight=${e.closeIconHeight}
      .closeIconWidth=${e.closeIconWidth}
      .contentJustifyC=${e.contentJustifyC}
      .contentAlignI=${e.contentAlignI}
      .contentGap=${e.contentGap}
      .gapSize=${e.gapSize}
      .contentOverflowY=${e.contentOverflowY}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
`;c.args={compHeight:"100vh",compWidth:"100vw",compZIndex:"999999990",compBackgroundColor:"rgba(0, 0, 0, 0.3)",windMinHeight:"1vh",windMinWidth:"1vw",windMaxHeight:"90vh",windMaxWidth:"90vw",windPad:"8px",windColor:"#f5f5f5",windShadow:"0px 2px 5px #d0d0d0",showHeader:!0,headerHeight:"fit-content",headerGap:"5px",headerText:"Overlay Window",headerTextFontSize:"24px",headerTextFontWeight:"bold",headerTextFontFamily:"'Helvetica', 'Arial', sans-serif",headerTextColor:"black",headerTextShadow:"0px 2px 5px #d0d0d0",headerTextTransform:"none",showCloseButton:!0,closeButtonSrc:void 0,closeHeight:"fit-content",closeWidth:"fit-content",closeHoverColor:"#cfd8dc",closeIconHeight:"fit-content",closeIconWidth:"fit-content",contentJustifyC:"start",contentAlignI:"center",contentGap:"5px",contentOverflowY:"auto",gapSize:"5px",handleBackgroundClick:()=>console.log("Background clicked"),handleCloseClick:()=>console.log("Close clicked")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <overlay-window
      .compHeight=\${args.compHeight}
      .compWidth=\${args.compWidth}
      .compZIndex=\${args.compZIndex}
      .compBackgroundColor=\${args.compBackgroundColor}
      .handleBackgroundClick=\${args.handleBackgroundClick}
      .windMinHeight=\${args.windMinHeight}
      .windMinWidth=\${args.windMinWidth}
      .windMaxHeight=\${args.windMaxHeight}
      .windMaxWidth=\${args.windMaxWidth}
      .windPad=\${args.windPad}
      .windColor=\${args.windColor}
      .windShadow=\${args.windShadow}
      .showHeader=\${args.showHeader}
      .headerHeight=\${args.headerHeight}
      .headerGap=\${args.headerGap}
      .headerText=\${args.headerText}
      .headerTextFontSize=\${args.headerTextFontSize}
      .headerTextFontWeight=\${args.headerTextFontWeight}
      .headerTextFontFamily=\${args.headerTextFontFamily}
      .headerTextColor=\${args.headerTextColor}
      .headerTextShadow=\${args.headerTextShadow}
      .headerTextTransform=\${args.headerTextTransform}
      .showCloseButton=\${args.showCloseButton}
      .handleCloseClick=\${args.handleCloseClick}
      .closeButtonSrc=\${args.closeButtonSrc}
      .closeHeight=\${args.closeHeight}
      .closeWidth=\${args.closeWidth}
      .closeHoverColor=\${args.closeHoverColor}
      .closeIconHeight=\${args.closeIconHeight}
      .closeIconWidth=\${args.closeIconWidth}
      .contentJustifyC=\${args.contentJustifyC}
      .contentAlignI=\${args.contentAlignI}
      .contentGap=\${args.contentGap}
      .gapSize=\${args.gapSize}
      .contentOverflowY=\${args.contentOverflowY}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
\``,...c.parameters?.docs?.source}}};const H=["Default"];export{c as Default,H as __namedExportsOrder,b as default};
