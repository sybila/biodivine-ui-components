import{i as s,a as y,x as l}from"./iframe-D30078Be.js";import{n as a,t as x}from"./property-BI3G_A2r.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n=(e,t,i,d)=>{for(var r=d>1?void 0:d?u(t,i):t,h=e.length-1,w;h>=0;h--)(w=e[h])&&(r=(d?w(t,i,r):w(r))||r);return d&&r&&p(t,i,r),r},g=(e,t,i)=>v(e,typeof t!="symbol"?t+"":t,i);let o=class extends y{updateStyleVariable(e,t,i){const d=this[e]??i;this.style.setProperty(t,d)}updated(e){const t=(i,d,r)=>e.has(i)&&this.updateStyleVariable(i,d,r);t("compHeight","--overlay-window-comp-height","100vh"),t("compWidth","--overlay-window-comp-width","100vw"),t("compMaxHeight","--overlay-window-comp-max-height","100vh"),t("compMaxWidth","--overlay-window-comp-max-width","100vw"),t("compZIndex","--overlay-window-comp-z-index","999999990"),t("compBackgroundColor","--overlay-window-background-color","rgba(0, 0, 0, 0.3)"),t("compBackgroundWidth","--overlay-window-background-width","100%"),t("compBackgroundHeight","--overlay-window-background-height","100%"),t("windHeight","--overlay-window-height","fit-content"),t("windWidth","--overlay-window-width","400px"),t("windMaxHeight","--overlay-window-max-height","100%"),t("windMaxWidth","--overlay-window-max-width","400px"),t("windPad","--overlay-window-padding","8px"),t("gapSize","--overlay-window-gap","5px"),t("windColor","--overlay-window-bg-color","#f5f5f5"),t("windShadow","--overlay-window-shadow","0px 2px 5px #d0d0d0"),t("windOverflowX","--overlay-window-overflow-x","auto"),t("windOverflowY","--overlay-window-overflow-y","auto"),t("windResize","--overlay-window-resize","none"),t("headerHeight","--overlay-window-header-height","fit-content"),t("headerWidth","--overlay-window-header-width","100%"),t("headerGap","--overlay-window-header-gap","5px"),t("headerTextFontSize","--overlay-window-tag-font-size","24px"),t("headerTextFontWeight","--overlay-window-tag-font-weight","bold"),t("headerTextFontFamily","--overlay-window-tag-font-family","'Helvetica', 'Arial', sans-serif"),t("headerTextShadow","--overlay-window-tag-text-shadow","0px 2px 5px #d0d0d0"),t("headerTextColor","--overlay-window-tag-color","black"),t("headerTextTransform","--overlay-window-tag-text-transform","none"),t("closeHeight","--overlay-window-close-height","fit-content"),t("closeWidth","--overlay-window-close-width","fit-content"),t("closeHoverColor","--overlay-window-close-hover-color","#cfd8dc"),t("closeIconHeight","--overlay-window-close-icon-height","fit-content"),t("closeIconWidth","--overlay-window-close-icon-width","fit-content"),t("contentHeight","--overlay-window-content-height","fit-content"),t("contentWidth","--overlay-window-content-width","100%"),t("contentMaxHeight","--overlay-window-content-max-height","100%"),t("contentMaxWidth","--overlay-window-content-max-width","100%"),t("contentJustifyC","--overlay-window-content-justify-content","start"),t("contentAlignI","--overlay-window-content-align-items","center"),t("contentGap","--overlay-window-content-gap","5px")}render(){return l`
      <div
        id="background"
        part="background"
        @click=${e=>{e.target===e.currentTarget&&this.handleBackgroundClick&&this.handleBackgroundClick()}}
      >
        <div id="window" part="window">
          ${this.showHeader?l`<div id="header" part="header">
                ${this.showCloseButton?l`<div id="close-button" part="close-button" @click=${this.handleCloseClick}>
                    <img id="close-button-icon" part="close-button-icon" src=${this.closeButtonSrc??o.closeIcon} ></img>
                </div>`:l`<div></div>`}
                <p id="header-text" part="header-text">
                  ${this.headerText??""}
                </p>
                <div></div>
              </div>`:""}
          <slot part="content"></slot>
        </div>
      </div>
    `}};g(o,"styles",s`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: var(--overlay-window-comp-height, 100vh);
      width: var(--overlay-window-comp-width, 100vw);
      max-height: var(--overlay-window-comp-max-height, 100vh);
      max-width: var(--overlay-window-comp-max-width, 100vw);
      z-index: var(--overlay-window-comp-z-index, 999999990);
    }

    #background {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: var(--overlay-window-background-width, 100%);
      height: var(--overlay-window-background-height, 100%);
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
      height: var(--overlay-window-height, fit-content);
      width: var(--overlay-window-width, 400px);
      max-height: var(--overlay-window-max-height, 100%);
      max-width: var(--overlay-window-max-width, 400px);
      padding: var(--overlay-window-padding, 8px);
      gap: var(--overlay-window-gap, 5px);
      border-radius: 8px;
      background-color: var(--overlay-window-bg-color, #f5f5f5);
      box-shadow: var(--overlay-window-shadow, 0px 2px 5px #d0d0d0);
      overflow-x: var(--overlay-window-overflow-x, auto);
      overflow-y: var(--overlay-window-overflow-y, auto);
      resize: var(--overlay-window-resize, none);
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
      justify-content: var(--overlay-window-content-justify-content, start);
      align-items: var(--overlay-window-content-align-items, center);
      height: var(--overlay-window-content-height, fit-content);
      width: var(--overlay-window-content-width, 100%);
      max-height: var(--overlay-window-content-max-height, 100%);
      max-width: var(--overlay-window-content-max-width, 100%);
      gap: var(--overlay-window-content-gap, 5px);
    }
  `);g(o,"closeIcon","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");n([a({type:String})],o.prototype,"compHeight",2);n([a({type:String})],o.prototype,"compWidth",2);n([a({type:String})],o.prototype,"compMaxHeight",2);n([a({type:String})],o.prototype,"compMaxWidth",2);n([a({type:String})],o.prototype,"compZIndex",2);n([a({type:String})],o.prototype,"compBackgroundColor",2);n([a({type:String})],o.prototype,"compBackgroundWidth",2);n([a({type:String})],o.prototype,"compBackgroundHeight",2);n([a({type:Function})],o.prototype,"handleBackgroundClick",2);n([a({type:String})],o.prototype,"windHeight",2);n([a({type:String})],o.prototype,"windWidth",2);n([a({type:String})],o.prototype,"windMaxHeight",2);n([a({type:String})],o.prototype,"windMaxWidth",2);n([a({type:String})],o.prototype,"windPad",2);n([a({type:String})],o.prototype,"windColor",2);n([a({type:String})],o.prototype,"windShadow",2);n([a({type:String})],o.prototype,"windOverflowX",2);n([a({type:String})],o.prototype,"windOverflowY",2);n([a({type:String})],o.prototype,"windResize",2);n([a({type:Boolean})],o.prototype,"showHeader",2);n([a({type:String})],o.prototype,"headerHeight",2);n([a({type:String})],o.prototype,"headerWidth",2);n([a({type:String})],o.prototype,"headerGap",2);n([a({type:String})],o.prototype,"headerText",2);n([a({type:String})],o.prototype,"headerTextFontSize",2);n([a({type:String})],o.prototype,"headerTextFontWeight",2);n([a({type:String})],o.prototype,"headerTextFontFamily",2);n([a({type:String})],o.prototype,"headerTextColor",2);n([a({type:String})],o.prototype,"headerTextShadow",2);n([a({type:String})],o.prototype,"headerTextTransform",2);n([a({type:Boolean})],o.prototype,"showCloseButton",2);n([a({type:Function})],o.prototype,"handleCloseClick",2);n([a({type:String})],o.prototype,"closeButtonSrc",2);n([a({type:String})],o.prototype,"closeHeight",2);n([a({type:String})],o.prototype,"closeWidth",2);n([a({type:String})],o.prototype,"closeHoverColor",2);n([a({type:String})],o.prototype,"closeIconHeight",2);n([a({type:String})],o.prototype,"closeIconWidth",2);n([a({type:String})],o.prototype,"contentHeight",2);n([a({type:String})],o.prototype,"contentWidth",2);n([a({type:String})],o.prototype,"contentMaxHeight",2);n([a({type:String})],o.prototype,"contentMaxWidth",2);n([a({type:String})],o.prototype,"contentJustifyC",2);n([a({type:String})],o.prototype,"contentAlignI",2);n([a({type:String})],o.prototype,"contentGap",2);n([a({type:String})],o.prototype,"gapSize",2);o=n([x("overlay-window")],o);const H={title:"Components/Content Panels/Overlay Window",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<overlay-window>`\n\nA flexible overlay/modal window component.\n\n#### CSS Custom Properties\n\n| Variable | Description |\n|----------|-------------|\n| `--overlay-window-comp-height` | Height of the overlay window component |\n| `--overlay-window-comp-width` | Width of the overlay window component |\n| `--overlay-window-comp-max-height` | Max height of the overlay window component |\n| `--overlay-window-comp-max-width` | Max width of the overlay window component |\n| `--overlay-window-comp-z-index` | Z-index of the overlay window |\n| `--overlay-window-background-color` | Background color of the overlay |\n| `--overlay-window-background-width` | Width of the overlay background |\n| `--overlay-window-background-height` | Height of the overlay background |\n| `--overlay-window-height` | Height of the window panel |\n| `--overlay-window-width` | Width of the window panel |\n| `--overlay-window-max-height` | Max height of the window panel |\n| `--overlay-window-max-width` | Max width of the window panel |\n| `--overlay-window-padding` | Padding of the window panel |\n| `--overlay-window-gap` | Gap between window sections |\n| `--overlay-window-bg-color` | Background color of the window panel |\n| `--overlay-window-shadow` | Box shadow of the window panel |\n| `--overlay-window-overflow-x` | Overflow-x of the window panel |\n| `--overlay-window-overflow-y` | Overflow-y of the window panel |\n| `--overlay-window-resize` | Resize property of the window panel |\n| `--overlay-window-header-height` | Height of the header |\n| `--overlay-window-header-width` | Width of the header |\n| `--overlay-window-header-gap` | Gap in the header |\n| `--overlay-window-tag-font-size` | Header text font size |\n| `--overlay-window-tag-font-weight` | Header text font weight |\n| `--overlay-window-tag-font-family` | Header text font family |\n| `--overlay-window-tag-text-shadow` | Header text shadow |\n| `--overlay-window-tag-color` | Header text color |\n| `--overlay-window-tag-text-transform` | Header text transform |\n| `--overlay-window-close-height` | Height of the close button |\n| `--overlay-window-close-width` | Width of the close button |\n| `--overlay-window-close-hover-color` | Hover color of the close button |\n| `--overlay-window-close-icon-height` | Height of the close icon |\n| `--overlay-window-close-icon-width` | Width of the close icon |\n| `--overlay-window-content-height` | Height of the content area |\n| `--overlay-window-content-width` | Width of the content area |\n| `--overlay-window-content-max-height` | Max height of the content area |\n| `--overlay-window-content-max-width` | Max width of the content area |\n| `--overlay-window-content-justify-content` | Justify content in the content area |\n| `--overlay-window-content-align-items` | Align items in the content area |\n| `--overlay-window-content-gap` | Gap in the content area |\n\n#### Shadow DOM Parts\n\n| Part Name         | Description                                 |\n|-------------------|---------------------------------------------|\n| `background`    | The overlay background                      |\n| `window`        | The main window panel                       |\n| `header`        | The header area                             |\n| `header-text`   | The header text element                     |\n| `close-button`  | The close button container                  |\n| `close-button-icon` | The close icon image                   |\n| `content`       | The slot for window content                 |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the overlay window component",table:{defaultValue:{summary:"100vh"},category:"Layout"}},compWidth:{control:"text",description:"Width of the overlay window component",table:{defaultValue:{summary:"100vw"},category:"Layout"}},compMaxHeight:{control:"text",description:"Max height of the overlay window component",table:{defaultValue:{summary:"100vh"},category:"Layout"}},compMaxWidth:{control:"text",description:"Max width of the overlay window component",table:{defaultValue:{summary:"100vw"},category:"Layout"}},compZIndex:{control:"text",description:"Z-index of the overlay window",table:{defaultValue:{summary:"999999990"},category:"Layout"}},compBackgroundColor:{control:"color",description:"Background color of the overlay",table:{defaultValue:{summary:"rgba(0, 0, 0, 0.3)"},category:"Background"}},compBackgroundWidth:{control:"text",description:"Width of the overlay background",table:{defaultValue:{summary:"100%"},category:"Background"}},compBackgroundHeight:{control:"text",description:"Height of the overlay background",table:{defaultValue:{summary:"100%"},category:"Background"}},handleBackgroundClick:{action:"backgroundClick",description:"Function to handle background click",table:{category:"Events"}},windHeight:{control:"text",description:"Height of the window panel",table:{defaultValue:{summary:"fit-content"},category:"Window"}},windWidth:{control:"text",description:"Width of the window panel",table:{defaultValue:{summary:"400px"},category:"Window"}},windMaxHeight:{control:"text",description:"Max height of the window panel",table:{defaultValue:{summary:"100%"},category:"Window"}},windMaxWidth:{control:"text",description:"Max width of the window panel",table:{defaultValue:{summary:"400px"},category:"Window"}},windPad:{control:"text",description:"Padding of the window panel",table:{defaultValue:{summary:"8px"},category:"Window"}},windColor:{control:"color",description:"Background color of the window panel",table:{defaultValue:{summary:"#f5f5f5"},category:"Window"}},windShadow:{control:"text",description:"Box shadow of the window panel",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Window"}},windOverflowX:{control:"text",description:"Overflow-x of the window panel",table:{defaultValue:{summary:"auto"},category:"Window"}},windOverflowY:{control:"text",description:"Overflow-y of the window panel",table:{defaultValue:{summary:"auto"},category:"Window"}},windResize:{control:"text",description:"Resize property of the window panel",table:{defaultValue:{summary:"none"},category:"Window"}},showHeader:{control:"boolean",description:"Show the header section",table:{defaultValue:{summary:"true"},category:"Header"}},headerHeight:{control:"text",description:"Height of the header",table:{defaultValue:{summary:"fit-content"},category:"Header"}},headerWidth:{control:"text",description:"Width of the header",table:{defaultValue:{summary:"100%"},category:"Header"}},headerGap:{control:"text",description:"Gap in the header",table:{defaultValue:{summary:"5px"},category:"Header"}},headerText:{control:"text",description:"Header text",table:{defaultValue:{summary:""},category:"Header"}},headerTextFontSize:{control:"text",description:"Header text font size",table:{defaultValue:{summary:"24px"},category:"Header"}},headerTextFontWeight:{control:"text",description:"Header text font weight",table:{defaultValue:{summary:"bold"},category:"Header"}},headerTextFontFamily:{control:"text",description:"Header text font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Header"}},headerTextColor:{control:"color",description:"Header text color",table:{defaultValue:{summary:"black"},category:"Header"}},headerTextShadow:{control:"text",description:"Header text shadow",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Header"}},headerTextTransform:{control:"text",description:"Header text transform",table:{defaultValue:{summary:"none"},category:"Header"}},showCloseButton:{control:"boolean",description:"Show the close button",table:{defaultValue:{summary:"true"},category:"Header"}},handleCloseClick:{action:"closeClick",description:"Function to handle close button click",table:{category:"Events"}},closeButtonSrc:{control:"text",description:"Source URL for the close button icon",table:{defaultValue:{summary:void 0},category:"Header"}},closeHeight:{control:"text",description:"Height of the close button",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeWidth:{control:"text",description:"Width of the close button",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeHoverColor:{control:"color",description:"Hover color of the close button",table:{defaultValue:{summary:"#cfd8dc"},category:"Header"}},closeIconHeight:{control:"text",description:"Height of the close icon",table:{defaultValue:{summary:"fit-content"},category:"Header"}},closeIconWidth:{control:"text",description:"Width of the close icon",table:{defaultValue:{summary:"fit-content"},category:"Header"}},contentHeight:{control:"text",description:"Height of the content area",table:{defaultValue:{summary:"fit-content"},category:"Content"}},contentWidth:{control:"text",description:"Width of the content area",table:{defaultValue:{summary:"100%"},category:"Content"}},contentMaxHeight:{control:"text",description:"Max height of the content area",table:{defaultValue:{summary:"100%"},category:"Content"}},contentMaxWidth:{control:"text",description:"Max width of the content area",table:{defaultValue:{summary:"100%"},category:"Content"}},contentJustifyC:{control:"text",description:"Justify content in the content area",table:{defaultValue:{summary:"start"},category:"Content"}},contentAlignI:{control:"text",description:"Align items in the content area",table:{defaultValue:{summary:"center"},category:"Content"}},contentGap:{control:"text",description:"Gap in the content area",table:{defaultValue:{summary:"5px"},category:"Content"}},gapSize:{control:"text",description:"Gap size between window sections",table:{defaultValue:{summary:"5px"},category:"Window"}}}},c=e=>l`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <overlay-window
      .compHeight=${e.compHeight}
      .compWidth=${e.compWidth}
      .compMaxHeight=${e.compMaxHeight}
      .compMaxWidth=${e.compMaxWidth}
      .compZIndex=${e.compZIndex}
      .compBackgroundColor=${e.compBackgroundColor}
      .compBackgroundWidth=${e.compBackgroundWidth}
      .compBackgroundHeight=${e.compBackgroundHeight}
      .handleBackgroundClick=${e.handleBackgroundClick}
      .windHeight=${e.windHeight}
      .windWidth=${e.windWidth}
      .windMaxHeight=${e.windMaxHeight}
      .windMaxWidth=${e.windMaxWidth}
      .windPad=${e.windPad}
      .windColor=${e.windColor}
      .windShadow=${e.windShadow}
      .windOverflowX=${e.windOverflowX}
      .windOverflowY=${e.windOverflowY}
      .windResize=${e.windResize}
      .showHeader=${e.showHeader}
      .headerHeight=${e.headerHeight}
      .headerWidth=${e.headerWidth}
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
      .contentHeight=${e.contentHeight}
      .contentWidth=${e.contentWidth}
      .contentMaxHeight=${e.contentMaxHeight}
      .contentMaxWidth=${e.contentMaxWidth}
      .contentJustifyC=${e.contentJustifyC}
      .contentAlignI=${e.contentAlignI}
      .contentGap=${e.contentGap}
      .gapSize=${e.gapSize}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
`;c.args={compHeight:"100vh",compWidth:"100vw",compMaxHeight:"100vh",compMaxWidth:"100vw",compZIndex:"999999990",compBackgroundColor:"rgba(0, 0, 0, 0.3)",compBackgroundWidth:"100%",compBackgroundHeight:"100%",windHeight:"fit-content",windWidth:"400px",windMaxHeight:"100%",windMaxWidth:"400px",windPad:"8px",windColor:"#f5f5f5",windShadow:"0px 2px 5px #d0d0d0",windOverflowX:"auto",windOverflowY:"auto",windResize:"none",showHeader:!0,headerHeight:"fit-content",headerWidth:"100%",headerGap:"5px",headerText:"Overlay Window",headerTextFontSize:"24px",headerTextFontWeight:"bold",headerTextFontFamily:"'Helvetica', 'Arial', sans-serif",headerTextColor:"black",headerTextShadow:"0px 2px 5px #d0d0d0",headerTextTransform:"none",showCloseButton:!0,closeButtonSrc:void 0,closeHeight:"fit-content",closeWidth:"fit-content",closeHoverColor:"#cfd8dc",closeIconHeight:"fit-content",closeIconWidth:"fit-content",contentHeight:"fit-content",contentWidth:"100%",contentMaxHeight:"100%",contentMaxWidth:"100%",contentJustifyC:"start",contentAlignI:"center",contentGap:"5px",gapSize:"5px",handleBackgroundClick:()=>console.log("Background clicked"),handleCloseClick:()=>console.log("Close clicked")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => html\`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <overlay-window
      .compHeight=\${args.compHeight}
      .compWidth=\${args.compWidth}
      .compMaxHeight=\${args.compMaxHeight}
      .compMaxWidth=\${args.compMaxWidth}
      .compZIndex=\${args.compZIndex}
      .compBackgroundColor=\${args.compBackgroundColor}
      .compBackgroundWidth=\${args.compBackgroundWidth}
      .compBackgroundHeight=\${args.compBackgroundHeight}
      .handleBackgroundClick=\${args.handleBackgroundClick}
      .windHeight=\${args.windHeight}
      .windWidth=\${args.windWidth}
      .windMaxHeight=\${args.windMaxHeight}
      .windMaxWidth=\${args.windMaxWidth}
      .windPad=\${args.windPad}
      .windColor=\${args.windColor}
      .windShadow=\${args.windShadow}
      .windOverflowX=\${args.windOverflowX}
      .windOverflowY=\${args.windOverflowY}
      .windResize=\${args.windResize}
      .showHeader=\${args.showHeader}
      .headerHeight=\${args.headerHeight}
      .headerWidth=\${args.headerWidth}
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
      .contentHeight=\${args.contentHeight}
      .contentWidth=\${args.contentWidth}
      .contentMaxHeight=\${args.contentMaxHeight}
      .contentMaxWidth=\${args.contentMaxWidth}
      .contentJustifyC=\${args.contentJustifyC}
      .contentAlignI=\${args.contentAlignI}
      .contentGap=\${args.contentGap}
      .gapSize=\${args.gapSize}
    >
      <div>Overlay window content goes here.</div>
    </overlay-window>
  </div>
\``,...c.parameters?.docs?.source}}};const b=["Default"];export{c as Default,b as __namedExportsOrder,H as default};
