import{i as m,a as g,x as s}from"./iframe-BoJJlkzw.js";import{n as r,t as y}from"./property-aVK9kFO7.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t,a,d)=>{for(var i=d>1?void 0:d?u(t,a):t,c=e.length-1,w;c>=0;c--)(w=e[c])&&(i=(d?w(t,a,i):w(i))||i);return d&&i&&h(t,a,i),i},p=(e,t,a)=>v(e,typeof t!="symbol"?t+"":t,a);let o=class extends g{updateStyleVariable(e,t,a){const d=this[e]??a;this.style.setProperty(t,d)}updated(e){const t=(a,d,i)=>e.has(a)&&this.updateStyleVariable(a,d,i);t("compHeight","--semitransparent-overlay-window-comp-height","100vh"),t("compWidth","--semitransparent-overlay-window-comp-width","100vw"),t("compZIndex","--semitransparent-overlay-window-comp-z-index","999999990"),t("compBackgroundColor","--semitransparent-overlay-window-background-color","transparent"),t("backgroundUserSelect","--semitransparent-overlay-window-bg-user-select","none"),t("backgroundPointerEvents","--semitransparent-overlay-window-bg-pointer-events","none"),t("windMinHeight","--semitransparent-overlay-window-min-height","1vh"),t("windMinWidth","--semitransparent-overlay-window-min-width","1vh"),t("windMaxHeight","--semitransparent-overlay-window-max-height","90vh"),t("windMaxWidth","--semitransparent-overlay-window-max-width","90vh"),t("windPad","--semitransparent-overlay-window-padding","8px"),t("gapSize","--semitransparent-overlay-window-gap","5px"),t("windColor","--semitransparent-overlay-window-bg-color","#646464"),t("windShadow","--semitransparent-overlay-window-shadow","0px 2px 5px #d0d0d0"),t("windowUserSelect","--semitransparent-overlay-window-win-user-select","none"),t("windowPointerEvents","--semitransparent-overlay-window-win-pointer-events","none"),t("headerHeight","--semitransparent-overlay-window-header-height","fit-content"),t("headerWidth","--semitransparent-overlay-window-header-width","100%"),t("headerGap","--semitransparent-overlay-window-header-gap","5px"),t("headerTextFontSize","--semitransparent-overlay-window-tag-font-size","24px"),t("headerTextFontWeight","--semitransparent-overlay-window-tag-font-weight","bold"),t("headerTextFontFamily","--semitransparent-overlay-window-tag-font-family","'Helvetica', 'Arial', sans-serif"),t("headerTextShadow","--semitransparent-overlay-window-tag-text-shadow","none"),t("headerTextColor","--semitransparent-overlay-window-tag-color","white"),t("headerTextTransform","--semitransparent-overlay-window-tag-text-transform","none"),t("closeHeight","--semitransparent-overlay-window-close-height","fit-content"),t("closeWidth","--semitransparent-overlay-window-close-width","fit-content"),t("closeHoverColor","--semitransparent-overlay-window-close-hover-color","#cfd8dc"),t("closeIconHeight","--semitransparent-overlay-window-close-icon-height","fit-content"),t("closeIconWidth","--semitransparent-overlay-window-close-icon-width","fit-content"),t("contentJustifyC","--semitransparent-overlay-window-content-justify-content","start"),t("contentAlignI","--semitransparent-overlay-window-content-align-items","center"),t("contentGap","--semitransparent-overlay-window-content-gap","5px"),t("contentOverflowY","--semitransparent-overlay-window-content-overflow-y","auto")}render(){return s`
      <div
        id="background"
        part="background"
        @click=${e=>{e.target===e.currentTarget&&this.handleBackgroundClick&&this.handleBackgroundClick()}}
      >
        <div id="window" part="window">
          ${this.showHeader!=!1?s`<div id="header" part="header">
                ${this.showCloseButton?s`<div id="close-button" part="close-button" @click=${this.handleCloseClick}>
                    <img id="close-button-icon" part="close-button-icon" src=${this.closeButtonSrc??o.closeIcon} ></img>
                </div>`:s`<div></div>`}
                <p id="header-text" part="header-text">
                  ${this.headerText??""}
                </p>
                <div></div>
              </div>`:""}
          <slot part="content"></slot>
        </div>
      </div>
    `}};p(o,"styles",m`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: var(--semitransparent-overlay-window-comp-height, 100vh);
      width: var(--semitransparent-overlay-window-comp-width, 100vw);
      z-index: var(--semitransparent-overlay-window-comp-z-index, 999999990);
      user-select: var(--semitransparent-overlay-window-bg-user-select, none);
      pointer-events: var(
        --semitransparent-overlay-window-bg-pointer-events,
        none
      );
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
        --semitransparent-overlay-window-background-color,
        transparent
      );
      overflow: hidden;
      user-select: var(--semitransparent-overlay-window-bg-user-select, none);
      pointer-events: var(
        --semitransparent-overlay-window-bg-pointer-events,
        none
      );
    }

    #window {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      max-height: var(--semitransparent-overlay-window-max-height, 90vh);
      max-width: var(--semitransparent-overlay-window-max-width, 90vw);
      min-height: var(--semitransparent-overlay-window-min-height, 1vh);
      min-width: var(--semitransparent-overlay-window-min-width, 1vw);
      padding: var(--semitransparent-overlay-window-padding, 8px);
      gap: var(--semitransparent-overlay-window-gap, 5px);
      border-radius: 8px;
      background-color: var(--semitransparent-overlay-window-bg-color, #646464);
      box-shadow: var(
        --semitransparent-overlay-window-shadow,
        0px 2px 5px #d0d0d0
      );
      overflow-x: hidden;
      overflow-y: hidden;
      resize: none;
      box-sizing: border-box;
      opacity: 0.5;
      user-select: var(--semitransparent-overlay-window-win-user-select, none);
      pointer-events: var(
        --semitransparent-overlay-window-win-pointer-events,
        none
      );
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--semitransparent-overlay-window-header-height, fit-content);
      width: var(--semitransparent-overlay-window-header-width, 100%);
      gap: var(--semitransparent-overlay-window-header-gap, 5px);
    }

    #header-text {
      margin: 0;
      font-size: var(--semitransparent-overlay-window-tag-font-size, 24px);
      font-weight: var(--semitransparent-overlay-window-tag-font-weight, bold);
      font-family: var(
        --semitransparent-overlay-window-tag-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--semitransparent-overlay-window-tag-text-shadow, none);
      color: var(--semitransparent-overlay-window-tag-color, white);
      text-transform: var(
        --semitransparent-overlay-window-tag-text-transform,
        none
      );
      cursor: default;
    }

    #close-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--semitransparent-overlay-window-close-height, fit-content);
      width: var(--semitransparent-overlay-window-close-width, fit-content);
      border-radius: 8px;
      background-color: var(--semitransparent-overlay-window-bg-color, #646464);
      transition: background-color 0.3s;
    }

    #close-button:hover {
      background-color: var(
        --semitransparent-overlay-window-close-hover-color,
        #cfd8dc
      );
    }

    #close-button-icon {
      height: var(
        --semitransparent-overlay-window-close-icon-height,
        fit-content
      );
      width: var(
        --semitransparent-overlay-window-close-icon-width,
        fit-content
      );
      max-height: var(
        --semitransparent-overlay-window-close-icon-height,
        fit-content
      );
      max-width: var(
        --semitransparent-overlay-window-close-icon-width,
        fit-content
      );
    }

    slot {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      justify-content: var(
        --semitransparent-overlay-window-content-justify-content,
        start
      );
      align-items: var(
        --semitransparent-overlay-window-content-align-items,
        center
      );
      overflow-x: hidden;
      overflow-y: var(
        --semitransparent-overlay-window-content-overflow-y,
        auto
      );
      gap: var(--semitransparent-overlay-window-content-gap, 5px);
    }
  `);p(o,"closeIcon","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");n([r({type:String})],o.prototype,"compHeight",2);n([r({type:String})],o.prototype,"compWidth",2);n([r({type:String})],o.prototype,"compZIndex",2);n([r({type:String})],o.prototype,"compBackgroundColor",2);n([r({type:String})],o.prototype,"backgroundUserSelect",2);n([r({type:String})],o.prototype,"backgroundPointerEvents",2);n([r({type:Function})],o.prototype,"handleBackgroundClick",2);n([r({type:String})],o.prototype,"windMinHeight",2);n([r({type:String})],o.prototype,"windMinWidth",2);n([r({type:String})],o.prototype,"windMaxHeight",2);n([r({type:String})],o.prototype,"windMaxWidth",2);n([r({type:String})],o.prototype,"windPad",2);n([r({type:String})],o.prototype,"windColor",2);n([r({type:String})],o.prototype,"windShadow",2);n([r({type:String})],o.prototype,"windowUserSelect",2);n([r({type:String})],o.prototype,"windowPointerEvents",2);n([r({type:Boolean})],o.prototype,"showHeader",2);n([r({type:String})],o.prototype,"headerHeight",2);n([r({type:String})],o.prototype,"headerWidth",2);n([r({type:String})],o.prototype,"headerGap",2);n([r({type:String})],o.prototype,"headerText",2);n([r({type:String})],o.prototype,"headerTextFontSize",2);n([r({type:String})],o.prototype,"headerTextFontWeight",2);n([r({type:String})],o.prototype,"headerTextFontFamily",2);n([r({type:String})],o.prototype,"headerTextColor",2);n([r({type:String})],o.prototype,"headerTextShadow",2);n([r({type:String})],o.prototype,"headerTextTransform",2);n([r({type:Boolean})],o.prototype,"showCloseButton",2);n([r({type:Function})],o.prototype,"handleCloseClick",2);n([r({type:String})],o.prototype,"closeButtonSrc",2);n([r({type:String})],o.prototype,"closeHeight",2);n([r({type:String})],o.prototype,"closeWidth",2);n([r({type:String})],o.prototype,"closeHoverColor",2);n([r({type:String})],o.prototype,"closeIconHeight",2);n([r({type:String})],o.prototype,"closeIconWidth",2);n([r({type:String})],o.prototype,"contentJustifyC",2);n([r({type:String})],o.prototype,"contentAlignI",2);n([r({type:String})],o.prototype,"contentGap",2);n([r({type:String})],o.prototype,"contentOverflowY",2);n([r({type:String})],o.prototype,"gapSize",2);o=n([y("semitransparent-overlay-window")],o);const b={title:"Components/content-panels/Semitransparent Overlay Window",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<semitransparent-overlay-window>`\n\nA semitransparent, full-screen overlay component rendering a centered modal window. It dims the background to maintain context while focusing user attention, making it suitable for quick help dialogs or transient instructions. The component supports configurable headers, close buttons, and slotted content via CSS custom properties or direct attributes.\n\n#### CSS Custom Properties\n\n| Variable | Description |\n|---|---|\n| `--semitransparent-overlay-window-comp-height` | Full screen container height |\n| `--semitransparent-overlay-window-comp-width` | Full screen container width |\n| `--semitransparent-overlay-window-comp-z-index` | Z-index of the overlay |\n| `--semitransparent-overlay-window-background-color` | Background overlay color |\n| `--semitransparent-overlay-window-bg-user-select` | Text selection behavior on background |\n| `--semitransparent-overlay-window-bg-pointer-events` | Pointer events (clicks) on background |\n| `--semitransparent-overlay-window-min-height` | Minimum window height |\n| `--semitransparent-overlay-window-min-width` | Minimum window width |\n| `--semitransparent-overlay-window-max-height` | Maximum window height |\n| `--semitransparent-overlay-window-max-width` | Maximum window width |\n| `--semitransparent-overlay-window-padding` | Inner padding of the window |\n| `--semitransparent-overlay-window-gap` | Gap between header and content |\n| `--semitransparent-overlay-window-bg-color` | Window background color |\n| `--semitransparent-overlay-window-win-user-select` | Text selection behavior on window |\n| `--semitransparent-overlay-window-win-pointer-events` | Pointer events on window |\n| `--semitransparent-overlay-window-shadow` | Box shadow of the window |\n| `--semitransparent-overlay-window-header-height` | Header height |\n| `--semitransparent-overlay-window-header-width` | Header width |\n| `--semitransparent-overlay-window-header-gap` | Gap inside header |\n| `--semitransparent-overlay-window-tag-font-size` | Header text font size |\n| `--semitransparent-overlay-window-tag-font-weight` | Header text font weight |\n| `--semitransparent-overlay-window-tag-font-family` | Header text font family |\n| `--semitransparent-overlay-window-tag-text-shadow` | Header text shadow |\n| `--semitransparent-overlay-window-tag-color` | Header text color |\n| `--semitransparent-overlay-window-tag-text-transform` | Header text transform |\n| `--semitransparent-overlay-window-close-height` | Close button height |\n| `--semitransparent-overlay-window-close-width` | Close button width |\n| `--semitransparent-overlay-window-close-hover-color` | Close button hover color |\n| `--semitransparent-overlay-window-close-icon-height` | Close icon height |\n| `--semitransparent-overlay-window-close-icon-width` | Close icon width |\n| `--semitransparent-overlay-window-content-justify-content` | Content justify content |\n| `--semitransparent-overlay-window-content-align-items` | Content align items |\n| `--semitransparent-overlay-window-content-gap` | Content item gap |\n| `--semitransparent-overlay-window-content-overflow-y` | Content vertical overflow |\n\n#### Shadow DOM Parts\n\n| Part Name | Element | Description |\n|---|---|---|\n| `background` | `div` | The full-screen background layer |\n| `window` | `div` | The central modal window container |\n| `header` | `div` | The optional header section |\n| `close-button` | `div` | The close button wrapper |\n| `close-button-icon` | `img` | The close icon image |\n| `header-text` | `p` | The header text element |\n| `content` | `slot` | The slot for child content |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the full-screen overlay container",table:{category:"Layout",defaultValue:{summary:"100vh"}}},compWidth:{control:"text",description:"Width of the full-screen overlay container",table:{category:"Layout",defaultValue:{summary:"100vw"}}},compZIndex:{control:"text",description:"Z-index of the overlay",table:{category:"Layout",defaultValue:{summary:"999999990"}}},compBackgroundColor:{control:"color",description:"Background color of the overlay",table:{category:"Layout",defaultValue:{summary:"transparent"}}},backgroundUserSelect:{control:"text",description:"Controls text selection on the background layer",table:{defaultValue:{summary:"none"},category:"Interaction"}},backgroundPointerEvents:{control:"text",description:"Controls pointer events (clicks, hovers) on the background layer",table:{defaultValue:{summary:"none"},category:"Interaction"}},handleBackgroundClick:{action:"backgroundClick",description:"Function to handle background click (only works if pointer-events allows it)",table:{category:"Events"}},windMinHeight:{control:"text",description:"Minimum height of the modal window",table:{category:"Window",defaultValue:{summary:"1vh"}}},windMinWidth:{control:"text",description:"Minimum width of the modal window",table:{category:"Window",defaultValue:{summary:"1vw"}}},windMaxHeight:{control:"text",description:"Maximum height of the modal window",table:{category:"Window",defaultValue:{summary:"90vh"}}},windMaxWidth:{control:"text",description:"Maximum width of the modal window",table:{category:"Window",defaultValue:{summary:"90vw"}}},windPad:{control:"text",description:"Padding inside the modal window",table:{category:"Window",defaultValue:{summary:"8px"}}},windColor:{control:"color",description:"Background color of the modal window",table:{category:"Window",defaultValue:{summary:"#646464"}}},windShadow:{control:"text",description:"Box shadow of the modal window",table:{category:"Window",defaultValue:{summary:"0px 2px 5px #d0d0d0"}}},windowUserSelect:{control:"text",description:"Controls text selection on the window panel",table:{defaultValue:{summary:"none"},category:"Interaction"}},windowPointerEvents:{control:"text",description:"Controls pointer events on the window panel",table:{defaultValue:{summary:"none"},category:"Interaction"}},gapSize:{control:"text",description:"Gap between header and content sections",table:{category:"Window",defaultValue:{summary:"5px"}}},showHeader:{control:"boolean",description:"Whether to display the header section",table:{category:"Header",defaultValue:{summary:"true"}}},headerHeight:{control:"text",description:"Height of the header container",table:{category:"Header",defaultValue:{summary:"fit-content"}}},headerWidth:{control:"text",description:"Width of the header container",table:{category:"Header",defaultValue:{summary:"100%"}}},headerGap:{control:"text",description:"Gap between elements inside the header",table:{category:"Header",defaultValue:{summary:"5px"}}},headerText:{control:"text",description:"Text content of the header",table:{category:"Header",defaultValue:{summary:""}}},headerTextFontSize:{control:"text",description:"Font size of the header text",table:{category:"Header",defaultValue:{summary:"24px"}}},headerTextFontWeight:{control:"text",description:"Font weight of the header text",table:{category:"Header",defaultValue:{summary:"bold"}}},headerTextFontFamily:{control:"text",description:"Font family of the header text",table:{category:"Header",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},headerTextColor:{control:"color",description:"Color of the header text",table:{category:"Header",defaultValue:{summary:"white"}}},headerTextShadow:{control:"text",description:"Text shadow for the header text",table:{category:"Header",defaultValue:{summary:"none"}}},headerTextTransform:{control:"text",description:"Text transformation (e.g., uppercase) for the header text",table:{category:"Header",defaultValue:{summary:"none"}}},showCloseButton:{control:"boolean",description:"Whether to display the close button",table:{category:"Close Button",defaultValue:{summary:"false"}}},closeButtonSrc:{control:"text",description:"Source URL for the close icon (defaults to built-in SVG)",table:{category:"Close Button",defaultValue:{summary:"Built-in SVG"}}},closeHeight:{control:"text",description:"Height of the close button container",table:{category:"Close Button",defaultValue:{summary:"fit-content"}}},closeWidth:{control:"text",description:"Width of the close button container",table:{category:"Close Button",defaultValue:{summary:"fit-content"}}},closeHoverColor:{control:"color",description:"Background color on close button hover",table:{category:"Close Button",defaultValue:{summary:"#cfd8dc"}}},closeIconHeight:{control:"text",description:"Height of the close icon image",table:{category:"Close Button",defaultValue:{summary:"fit-content"}}},closeIconWidth:{control:"text",description:"Width of the close icon image",table:{category:"Close Button",defaultValue:{summary:"fit-content"}}},handleCloseClick:{action:"closeClick",description:"Function to handle close button click",table:{category:"Events"}},contentJustifyC:{control:"text",description:"Justify content alignment for slotted content",table:{category:"Content",defaultValue:{summary:"start"}}},contentAlignI:{control:"text",description:"Align items alignment for slotted content",table:{category:"Content",defaultValue:{summary:"center"}}},contentGap:{control:"text",description:"Gap between slotted content items",table:{category:"Content",defaultValue:{summary:"5px"}}},contentOverflowY:{control:"text",description:"Vertical overflow behavior for slotted content",table:{category:"Content",defaultValue:{summary:"auto"}}}}},l=e=>s`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <semitransparent-overlay-window
      .compHeight=${e.compHeight}
      .compWidth=${e.compWidth}
      .compZIndex=${e.compZIndex}
      .compBackgroundColor=${e.compBackgroundColor}
      .backgroundUserSelect=${e.backgroundUserSelect}
      .backgroundPointerEvents=${e.backgroundPointerEvents}
      .handleBackgroundClick=${e.handleBackgroundClick}
      .windMinHeight=${e.windMinHeight}
      .windMinWidth=${e.windMinWidth}
      .windMaxHeight=${e.windMaxHeight}
      .windMaxWidth=${e.windMaxWidth}
      .windPad=${e.windPad}
      .windColor=${e.windColor}
      .windShadow=${e.windShadow}
      .windowUserSelect=${e.windowUserSelect}
      .windowPointerEvents=${e.windowPointerEvents}
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
      .contentJustifyC=${e.contentJustifyC}
      .contentAlignI=${e.contentAlignI}
      .contentGap=${e.contentGap}
      .contentOverflowY=${e.contentOverflowY}
      .gapSize=${e.gapSize}
    >
      <div style="padding: 20px; text-align: center; color: white;">
        <h3>Slotted Content</h3>
        <p>This is the content area.</p>
      </div>
    </semitransparent-overlay-window>
  </div>
`;l.args={compHeight:"100vh",compWidth:"100vw",compZIndex:"999999990",compBackgroundColor:"transparent",backgroundUserSelect:"none",backgroundPointerEvents:"none",handleBackgroundClick:()=>console.log("Background clicked"),windMinHeight:"1vh",windMinWidth:"1vw",windMaxHeight:"90vh",windMaxWidth:"90vw",windPad:"8px",windColor:"#646464",windShadow:"0px 2px 5px #d0d0d0",windowUserSelect:"none",windowPointerEvents:"none",gapSize:"5px",showHeader:!0,headerHeight:"fit-content",headerWidth:"100%",headerGap:"5px",headerText:"Modal Title",headerTextFontSize:"24px",headerTextFontWeight:"bold",headerTextFontFamily:"'Helvetica', 'Arial', sans-serif",headerTextColor:"white",headerTextShadow:"none",headerTextTransform:"none",showCloseButton:!1,closeButtonSrc:"",closeHeight:"fit-content",closeWidth:"fit-content",closeHoverColor:"#cfd8dc",closeIconHeight:"fit-content",closeIconWidth:"fit-content",handleCloseClick:()=>console.log("Close clicked"),contentJustifyC:"start",contentAlignI:"center",contentGap:"5px",contentOverflowY:"auto"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
  <div style="height: 100vh; width: 100vw; position: relative;">
    <semitransparent-overlay-window
      .compHeight=\${args.compHeight}
      .compWidth=\${args.compWidth}
      .compZIndex=\${args.compZIndex}
      .compBackgroundColor=\${args.compBackgroundColor}
      .backgroundUserSelect=\${args.backgroundUserSelect}
      .backgroundPointerEvents=\${args.backgroundPointerEvents}
      .handleBackgroundClick=\${args.handleBackgroundClick}
      .windMinHeight=\${args.windMinHeight}
      .windMinWidth=\${args.windMinWidth}
      .windMaxHeight=\${args.windMaxHeight}
      .windMaxWidth=\${args.windMaxWidth}
      .windPad=\${args.windPad}
      .windColor=\${args.windColor}
      .windShadow=\${args.windShadow}
      .windowUserSelect=\${args.windowUserSelect}
      .windowPointerEvents=\${args.windowPointerEvents}
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
      .contentJustifyC=\${args.contentJustifyC}
      .contentAlignI=\${args.contentAlignI}
      .contentGap=\${args.contentGap}
      .contentOverflowY=\${args.contentOverflowY}
      .gapSize=\${args.gapSize}
    >
      <div style="padding: 20px; text-align: center; color: white;">
        <h3>Slotted Content</h3>
        <p>This is the content area.</p>
      </div>
    </semitransparent-overlay-window>
  </div>
\``,...l.parameters?.docs?.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,b as default};
