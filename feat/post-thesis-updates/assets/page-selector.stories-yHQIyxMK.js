import{i as d,a as p,x as g}from"./iframe-DkD8NZt-.js";import{n as r,t as b}from"./property-rgYTM_nL.js";import{r as y}from"./state-gUEtSil1.js";var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,M=(t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,n=(t,e,i,a)=>{for(var c=a>1?void 0:a?f(e,i):e,l=t.length-1,s;l>=0;l--)(s=t[l])&&(c=(a?s(e,i,c):s(c))||c);return a&&c&&h(e,i,c),c},m=(t,e,i)=>M(t,e+"",i);let o=class extends p{updateStyleVariable(t,e,i){const a=this[t]??i;this.style.setProperty(e,a)}updated(t){const e=(i,a,c)=>t.has(i)&&this.updateStyleVariable(i,a,c);e("compHeight","--page-selector-comp-height","50px"),e("compWidth","--page-selector-comp-width","100px"),e("contHeight","--page-selector-container-height","100%"),e("contWidth","--page-selector-container-width","100%"),e("contOverflowX","--page-selector-container-overflow-x","hidden"),e("contOverflowY","--page-selector-container-overflow-y","hidden"),e("buttonsCenterGap","--page-selector-buttons-center-gap","8px"),e("buttonHeight","--page-selector-button-height","30px"),e("buttonWidth","--page-selector-button-width","30px"),e("buttonColor","--page-selector-button-color","#eceff1"),e("buttonHoverColor","--page-selector-button-hover-color","#b0bec5"),e("buttonDisabledColor","--page-selector-button-disabled-color","#b1b1b1ff"),e("buttonRadius","--page-selector-button-radius","4px"),e("buttonShadow","--page-selector-button-shadow","0px 2px 5px #d0d0d0"),e("leftButtonIconHeight","--page-selector-left-button-icon-height","70%"),e("leftButtonIconWidth","--page-selector-left-button-icon-width","70%"),e("rightButtonIconHeight","--page-selector-right-button-icon-height","70%"),e("rightButtonIconWidth","--page-selector-right-button-icon-width","70%"),e("centerHeight","--page-selector-center-height","30px"),e("centerMinWidth","--page-selector-center-min-width","30px"),e("centerMaxWidth","--page-selector-center-max-width","fit-content"),e("centerColor","--page-selector-center-color","#f3f2f1"),e("centerRadius","--page-selector-center-radius","4px"),e("centerShadow","--page-selector-center-shadow","0px 2px 5px #d0d0d0"),e("centerFontSize","--page-selector-center-font-size","14px"),e("centerFontWeight","--page-selector-center-font-weight","600"),e("centerFontFamily","--page-selector-center-font-family","'Helvetica', 'Arial', sans-serif"),e("centerTextColor","--page-selector-center-text-color","#000000")}changePage(t){const e=(this.currentPage??this.initialPage??1)+t;(t<0&&e>=1||t>0&&this.nextPageExists)&&(this.currentPage=e,this.handlePageChange&&this.handlePageChange(e))}checkFunctionAndRun(t,e){t?.(e)}leftButtonArrow="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNjguODM3LDI1NkwzODguNDE4LDM2LjQxOGM4LjMzMS04LjMzMSw4LjMzMS0yMS44MzksMC0zMC4xN2MtOC4zMzEtOC4zMzEtMjEuODM5LTguMzMxLTMwLjE3LDBMMTIzLjU4MiwyNDAuOTE1DQoJCQljLTguMzMxLDguMzMxLTguMzMxLDIxLjgzOSwwLDMwLjE3bDIzNC42NjcsMjM0LjY2N2M4LjMzMSw4LjMzMSwyMS44MzksOC4zMzEsMzAuMTcsMGM4LjMzMS04LjMzMSw4LjMzMS0yMS44MzksMC0zMC4xNw0KCQkJTDE2OC44MzcsMjU2eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg==";rightButtonArrow="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUxMi4wMDUgNTEyLjAwNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4OC40MTgsMjQwLjkyM0wxNTMuNzUxLDYuMjU2Yy04LjM0MS04LjM0MS0yMS44MjQtOC4zNDEtMzAuMTY1LDBzLTguMzQxLDIxLjgyNCwwLDMwLjE2NUwzNDMuMTcsMjU2LjAwNQ0KCQkJTDEyMy41ODYsNDc1LjU4OWMtOC4zNDEsOC4zNDEtOC4zNDEsMjEuODI0LDAsMzAuMTY1YzQuMTYsNC4xNiw5LjYyMSw2LjI1MSwxNS4wODMsNi4yNTFjNS40NjEsMCwxMC45MjMtMi4wOTEsMTUuMDgzLTYuMjUxDQoJCQlsMjM0LjY2Ny0yMzQuNjY3QzM5Ni43NTksMjYyLjc0NywzOTYuNzU5LDI0OS4yNjQsMzg4LjQxOCwyNDAuOTIzeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg==";render(){const t=!this.currentPage&&(!this.initialPage||this.initialPage<=1)||this.currentPage<=1?"disabled":"",e=this.nextPageExists?"":"disabled";return g`
      <div id="container" part="container">
        <button
          class=${t}
          id="left-button"
          part="left-button"
          @click=${()=>this.changePage(-1)}
          @mouseenter=${i=>this.checkFunctionAndRun(this.leftButtonOnMouseEnter,i)}
          @mouseleave=${i=>this.checkFunctionAndRun(this.leftButtonOnMouseLeave,i)}
        >
          <img
            id="left-button-icon"
            part="left-button-icon"
            src="${this.leftButtonIconSrc??this.leftButtonArrow}"
          />
        </button>

        <div
          id="center-indicator"
          part="center-indicator"
          @mouseenter=${i=>this.checkFunctionAndRun(this.centerIndicatorOnMouseEnter,i)}
          @mouseleave=${i=>this.checkFunctionAndRun(this.centerIndicatorOnMouseLeave,i)}
        >
          ${this.currentPage??this.initialPage??1}
        </div>

        <button
          class=${e}
          id="right-button"
          part="right-button"
          @click=${()=>this.changePage(1)}
          @mouseenter=${i=>this.checkFunctionAndRun(this.rightButtonOnMouseEnter,i)}
          @mouseleave=${i=>this.checkFunctionAndRun(this.rightButtonOnMouseLeave,i)}
        >
          <img
            id="right-button-icon"
            part="right-button-icon"
            src="${this.rightButtonIconSrc??this.rightButtonArrow}"
          />
        </button>
      </div>
    `}};m(o,"styles",d`
    :host {
      display: block;
      height: var(--page-selector-comp-height, 50px);
      width: var(--page-selector-comp-width, 100px);
      max-height: var(--page-selector-comp-height, 50px);
      max-width: var(--page-selector-comp-width, 100px);
    }

    #container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--page-selector-buttons-center-gap, 8px);
      height: var(--page-selector-container-height, 100%);
      width: var(--page-selector-container-width, 100%);
      position: relative;
      overflow-x: var(--page-selector-container-overflow-x, hidden);
      overflow-y: var(--page-selector-container-overflow-y, hidden);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--page-selector-button-height, 30px);
      width: var(--page-selector-button-width, 30px);
      background-color: var(--page-selector-button-color, #eceff1);
      border: none;
      border-radius: var(--page-selector-button-radius, 4px);
      box-shadow: var(--page-selector-button-shadow, 0px 2px 5px #d0d0d0);
    }

    button:hover {
      background-color: var(--page-selector-button-hover-color, #b0bec5);
      cursor: pointer;
    }

    button.disabled {
      background-color: var(--page-selector-button-disabled-color, #b1b1b1ff);
      cursor: not-allowed;
    }

    #left-button-icon {
      height: var(--page-selector-left-button-icon-height, 70%);
      width: var(--page-selector-left-button-icon-width, 70%);
      user-select: none;
    }

    #right-button-icon {
      height: var(--page-selector-right-button-icon-height, 70%);
      width: var(--page-selector-right-button-icon-width, 70%);
      user-select: none;
    }

    #center-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--page-selector-center-height, 30px);
      min-width: var(--page-selector-center-min-width, 30px);
      max-width: var(--page-selector-center-max-width, fit-content);
      background-color: var(--page-selector-center-color, #f3f2f1);
      border-radius: var(--page-selector-center-radius, 4px);
      box-shadow: var(--page-selector-center-shadow, 0px 2px 5px #d0d0d0);
      font-size: var(--page-selector-center-font-size, 14px);
      font-weight: var(--page-selector-center-font-weight, 600);
      font-family: var(
        --page-selector-center-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      color: var(--page-selector-center-text-color, #000000);
      user-select: none;
    }
  `);n([r({type:String})],o.prototype,"compHeight",2);n([r({type:String})],o.prototype,"compWidth",2);n([r({type:String})],o.prototype,"contHeight",2);n([r({type:String})],o.prototype,"contWidth",2);n([r({type:String})],o.prototype,"contOverflowX",2);n([r({type:String})],o.prototype,"contOverflowY",2);n([r({type:String})],o.prototype,"buttonsCenterGap",2);n([r({type:String})],o.prototype,"buttonHeight",2);n([r({type:String})],o.prototype,"buttonWidth",2);n([r({type:String})],o.prototype,"buttonColor",2);n([r({type:String})],o.prototype,"buttonHoverColor",2);n([r({type:String})],o.prototype,"buttonDisabledColor",2);n([r({type:String})],o.prototype,"buttonRadius",2);n([r({type:String})],o.prototype,"buttonShadow",2);n([r({type:String})],o.prototype,"leftButtonIconHeight",2);n([r({type:String})],o.prototype,"leftButtonIconWidth",2);n([r({type:String})],o.prototype,"leftButtonIconSrc",2);n([r({type:String})],o.prototype,"rightButtonIconHeight",2);n([r({type:String})],o.prototype,"rightButtonIconWidth",2);n([r({type:String})],o.prototype,"rightButtonIconSrc",2);n([r({type:String})],o.prototype,"centerHeight",2);n([r({type:String})],o.prototype,"centerMinWidth",2);n([r({type:String})],o.prototype,"centerMaxWidth",2);n([r({type:String})],o.prototype,"centerColor",2);n([r({type:String})],o.prototype,"centerRadius",2);n([r({type:String})],o.prototype,"centerShadow",2);n([r({type:String})],o.prototype,"centerFontSize",2);n([r({type:String})],o.prototype,"centerFontWeight",2);n([r({type:String})],o.prototype,"centerFontFamily",2);n([r({type:String})],o.prototype,"centerTextColor",2);n([r({type:Function})],o.prototype,"leftButtonOnMouseEnter",2);n([r({type:Function})],o.prototype,"leftButtonOnMouseLeave",2);n([r({type:Function})],o.prototype,"rightButtonOnMouseEnter",2);n([r({type:Function})],o.prototype,"rightButtonOnMouseLeave",2);n([r({type:Function})],o.prototype,"centerIndicatorOnMouseEnter",2);n([r({type:Function})],o.prototype,"centerIndicatorOnMouseLeave",2);n([r({type:Number})],o.prototype,"initialPage",2);n([r({type:Boolean})],o.prototype,"nextPageExists",2);n([r({type:Function})],o.prototype,"handlePageChange",2);n([y()],o.prototype,"currentPage",2);o=n([b("page-selector")],o);const C={title:"Components/Utilities/Page Selector",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<page-selector>`\n\nA component for selecting pages with left/right buttons and a center indicator.\n\n#### CSS Custom Properties\n\n| Variable                                   | Description                              |\n|---------------------------------------------|------------------------------------------|\n| `--page-selector-comp-height`             | Outer wrapper height                     |\n| `--page-selector-comp-width`              | Outer wrapper width                      |\n| `--page-selector-container-height`        | Container height                         |\n| `--page-selector-container-width`         | Container width                          |\n| `--page-selector-container-overflow-x`    | Container overflow-x                     |\n| `--page-selector-container-overflow-y`    | Container overflow-y                     |\n| `--page-selector-buttons-center-gap`      | Gap between buttons and center           |\n| `--page-selector-button-height`           | Button height                            |\n| `--page-selector-button-width`            | Button width                             |\n| `--page-selector-button-color`            | Button color                             |\n| `--page-selector-button-hover-color`      | Button color on hover                    |\n| `--page-selector-button-disabled-color`   | Button color when disabled               |\n| `--page-selector-button-radius`           | Button border radius                     |\n| `--page-selector-button-shadow`           | Button box shadow                        |\n| `--page-selector-left-button-icon-height` | Left button icon height                  |\n| `--page-selector-left-button-icon-width`  | Left button icon width                   |\n| `--page-selector-right-button-icon-height`| Right button icon height                 |\n| `--page-selector-right-button-icon-width` | Right button icon width                  |\n| `--page-selector-center-height`           | Center indicator height                  |\n| `--page-selector-center-min-width`        | Center indicator min width               |\n| `--page-selector-center-max-width`        | Center indicator max width               |\n| `--page-selector-center-color`            | Center indicator background color        |\n| `--page-selector-center-radius`           | Center indicator border radius           |\n| `--page-selector-center-shadow`           | Center indicator box shadow              |\n| `--page-selector-center-font-size`        | Center indicator font size               |\n| `--page-selector-center-font-weight`      | Center indicator font weight             |\n| `--page-selector-center-font-family`      | Center indicator font family             |\n| `--page-selector-center-text-color`       | Center indicator text color              |\n\n#### Shadow DOM Parts\n\n| Part Name           | Description                        |\n|---------------------|------------------------------------|\n| `container`         | Wrapper div for the whole control  |\n| `left-button`       | Left navigation button             |\n| `left-button-icon`  | Icon inside left button            |\n| `center-indicator`  | Center page indicator              |\n| `right-button`      | Right navigation button            |\n| `right-button-icon` | Icon inside right button           |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of outer component",table:{defaultValue:{summary:"50px"},category:"Layout"}},compWidth:{control:"text",description:"Width of outer component",table:{defaultValue:{summary:"100px"},category:"Layout"}},contHeight:{control:"text",description:"Height of container",table:{defaultValue:{summary:"100%"},category:"Container"}},contWidth:{control:"text",description:"Width of container",table:{defaultValue:{summary:"100%"},category:"Container"}},contOverflowX:{control:"text",description:"Overflow-x of container",table:{defaultValue:{summary:"hidden"},category:"Container"}},contOverflowY:{control:"text",description:"Overflow-y of container",table:{defaultValue:{summary:"hidden"},category:"Container"}},buttonsCenterGap:{control:"text",description:"Gap between buttons and center indicator",table:{defaultValue:{summary:"8px"},category:"Layout"}},buttonHeight:{control:"text",description:"Button height",table:{defaultValue:{summary:"30px"},category:"Button"}},buttonWidth:{control:"text",description:"Button width",table:{defaultValue:{summary:"30px"},category:"Button"}},buttonColor:{control:"color",description:"Button color",table:{defaultValue:{summary:"#eceff1"},category:"Button"}},buttonHoverColor:{control:"color",description:"Button color on hover",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonDisabledColor:{control:"color",description:"Button color when disabled",table:{defaultValue:{summary:"#b1b1b1ff"},category:"Button"}},buttonRadius:{control:"text",description:"Button border radius",table:{defaultValue:{summary:"4px"},category:"Button"}},buttonShadow:{control:"text",description:"Button box shadow",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Button"}},leftButtonIconHeight:{control:"text",description:"Left button icon height",table:{defaultValue:{summary:"70%"},category:"Button"}},leftButtonIconWidth:{control:"text",description:"Left button icon width",table:{defaultValue:{summary:"70%"},category:"Button"}},leftButtonIconSrc:{control:"text",description:"Left button icon src",table:{defaultValue:{summary:"undefined"},category:"Button"}},rightButtonIconHeight:{control:"text",description:"Right button icon height",table:{defaultValue:{summary:"70%"},category:"Button"}},rightButtonIconWidth:{control:"text",description:"Right button icon width",table:{defaultValue:{summary:"70%"},category:"Button"}},rightButtonIconSrc:{control:"text",description:"Right button icon src",table:{defaultValue:{summary:"undefined"},category:"Button"}},centerHeight:{control:"text",description:"Center indicator height",table:{defaultValue:{summary:"30px"},category:"Center"}},centerMinWidth:{control:"text",description:"Center indicator min width",table:{defaultValue:{summary:"30px"},category:"Center"}},centerMaxWidth:{control:"text",description:"Center indicator max width",table:{defaultValue:{summary:"fit-content"},category:"Center"}},centerColor:{control:"color",description:"Center indicator background color",table:{defaultValue:{summary:"#f3f2f1"},category:"Center"}},centerRadius:{control:"text",description:"Center indicator border radius",table:{defaultValue:{summary:"4px"},category:"Center"}},centerShadow:{control:"text",description:"Center indicator box shadow",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Center"}},centerFontSize:{control:"text",description:"Center indicator font size",table:{defaultValue:{summary:"14px"},category:"Center"}},centerFontWeight:{control:"text",description:"Center indicator font weight",table:{defaultValue:{summary:"600"},category:"Center"}},centerFontFamily:{control:"text",description:"Center indicator font family",table:{defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"},category:"Center"}},centerTextColor:{control:"color",description:"Center indicator text color",table:{defaultValue:{summary:"#000000"},category:"Center"}},initialPage:{control:"number",description:"Initial page number",table:{defaultValue:{summary:void 0},category:"Pages"}},nextPageExists:{control:"boolean",description:"Whether a next page exists",table:{defaultValue:{summary:"false"},category:"Pages"}},handlePageChange:{action:"pageChanged",description:"Callback when page changes",table:{type:{summary:"(page: number) => void"},category:"Events"},control:!1},leftButtonOnMouseEnter:{action:"leftButtonMouseEnter",description:"Function which runs when starts howering over the left button element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1},leftButtonOnMouseLeave:{action:"leftButtonMouseLeave",description:"Function which runs when stops howering over the left button element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1},rightButtonOnMouseEnter:{action:"rightButtonMouseEnter",description:"Function which runs when starts howering over the right button element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1},rightButtonOnMouseLeave:{action:"rightButtonMouseLeave",description:"Function which runs when stops howering over the right button element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1},centerIndicatorOnMouseEnter:{action:"centerIndicatorButtonMouseEnter",description:"Function which runs when starts howering over the center indicator element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1},centerIndicatorOnMouseLeave:{action:"centerIndicatorButtonMouseLeave",description:"Function which runs when stops howering over the center indicator element.",table:{type:{summary:"(e: MouseEvent) => void"},category:"Events"},control:!1}}},u=t=>g`
  <page-selector
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .contHeight=${t.contHeight}
    .contWidth=${t.contWidth}
    .contOverflowX=${t.contOverflowX}
    .contOverflowY=${t.contOverflowY}
    .buttonsCenterGap=${t.buttonsCenterGap}
    .buttonHeight=${t.buttonHeight}
    .buttonWidth=${t.buttonWidth}
    .buttonColor=${t.buttonColor}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonDisabledColor=${t.buttonDisabledColor}
    .buttonRadius=${t.buttonRadius}
    .buttonShadow=${t.buttonShadow}
    .leftButtonIconHeight=${t.leftButtonIconHeight}
    .leftButtonIconWidth=${t.leftButtonIconWidth}
    .leftButtonIconSrc=${t.leftButtonIconSrc}
    .rightButtonIconHeight=${t.rightButtonIconHeight}
    .rightButtonIconWidth=${t.rightButtonIconWidth}
    .rightButtonIconSrc=${t.rightButtonIconSrc}
    .centerHeight=${t.centerHeight}
    .centerMinWidth=${t.centerMinWidth}
    .centerMaxWidth=${t.centerMaxWidth}
    .centerColor=${t.centerColor}
    .centerRadius=${t.centerRadius}
    .centerShadow=${t.centerShadow}
    .centerFontSize=${t.centerFontSize}
    .centerFontWeight=${t.centerFontWeight}
    .centerFontFamily=${t.centerFontFamily}
    .centerTextColor=${t.centerTextColor}
    .initialPage=${t.initialPage}
    .nextPageExists=${t.nextPageExists}
    .handlePageChange=${t.handlePageChange}
    .leftButtonOnMouseEnter=${t.leftButtonOnMouseEnter}
    .leftButtonOnMouseLeave=${t.leftButtonOnMouseLeave}
    .rightButtonOnMouseEnter=${t.rightButtonOnMouseEnter}
    .rightButtonOnMouseLeave=${t.rightButtonOnMouseLeave}
    .centerIndicatorOnMouseEnter=${t.centerIndicatorOnMouseEnter}
    .centerIndicatorOnMouseLeave=${t.centerIndicatorOnMouseLeave}
  ></page-selector>
`;u.args={compHeight:"50px",compWidth:"200px",contHeight:"100%",contWidth:"100%",contOverflowX:"hidden",contOverflowY:"hidden",buttonsCenterGap:"8px",buttonHeight:"30px",buttonWidth:"30px",buttonColor:"#eceff1",buttonHoverColor:"#b0bec5",buttonDisabledColor:"#b1b1b1ff",buttonRadius:"4px",buttonShadow:"0px 2px 5px #d0d0d0",leftButtonIconHeight:"70%",leftButtonIconWidth:"70%",leftButtonIconSrc:void 0,rightButtonIconHeight:"70%",rightButtonIconWidth:"70%",rightButtonIconSrc:void 0,centerHeight:"30px",centerMinWidth:"30px",centerMaxWidth:"fit-content",centerColor:"#f3f2f1",centerRadius:"4px",centerShadow:"0px 2px 5px #d0d0d0",centerFontSize:"14px",centerFontWeight:"600",centerFontFamily:"'Helvetica', 'Arial', sans-serif",centerTextColor:"#000000",initialPage:void 0,nextPageExists:!0,leftButtonOnMouseEnter:()=>console.log("Left Button Mouse Enter"),leftButtonOnMouseLeave:()=>console.log("Left Button Mouse Leave"),rightButtonOnMouseEnter:()=>console.log("Right Button Mouse Enter"),rightButtonOnMouseLeave:()=>console.log("Right Button Mouse Leave"),centerIndicatorOnMouseEnter:()=>console.log("Center Indicator Mouse Enter"),centerIndicatorOnMouseLeave:()=>console.log("Center Indicator Mouse Leave")};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
  <page-selector
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .contHeight=\${args.contHeight}
    .contWidth=\${args.contWidth}
    .contOverflowX=\${args.contOverflowX}
    .contOverflowY=\${args.contOverflowY}
    .buttonsCenterGap=\${args.buttonsCenterGap}
    .buttonHeight=\${args.buttonHeight}
    .buttonWidth=\${args.buttonWidth}
    .buttonColor=\${args.buttonColor}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonDisabledColor=\${args.buttonDisabledColor}
    .buttonRadius=\${args.buttonRadius}
    .buttonShadow=\${args.buttonShadow}
    .leftButtonIconHeight=\${args.leftButtonIconHeight}
    .leftButtonIconWidth=\${args.leftButtonIconWidth}
    .leftButtonIconSrc=\${args.leftButtonIconSrc}
    .rightButtonIconHeight=\${args.rightButtonIconHeight}
    .rightButtonIconWidth=\${args.rightButtonIconWidth}
    .rightButtonIconSrc=\${args.rightButtonIconSrc}
    .centerHeight=\${args.centerHeight}
    .centerMinWidth=\${args.centerMinWidth}
    .centerMaxWidth=\${args.centerMaxWidth}
    .centerColor=\${args.centerColor}
    .centerRadius=\${args.centerRadius}
    .centerShadow=\${args.centerShadow}
    .centerFontSize=\${args.centerFontSize}
    .centerFontWeight=\${args.centerFontWeight}
    .centerFontFamily=\${args.centerFontFamily}
    .centerTextColor=\${args.centerTextColor}
    .initialPage=\${args.initialPage}
    .nextPageExists=\${args.nextPageExists}
    .handlePageChange=\${args.handlePageChange}
    .leftButtonOnMouseEnter=\${args.leftButtonOnMouseEnter}
    .leftButtonOnMouseLeave=\${args.leftButtonOnMouseLeave}
    .rightButtonOnMouseEnter=\${args.rightButtonOnMouseEnter}
    .rightButtonOnMouseLeave=\${args.rightButtonOnMouseLeave}
    .centerIndicatorOnMouseEnter=\${args.centerIndicatorOnMouseEnter}
    .centerIndicatorOnMouseLeave=\${args.centerIndicatorOnMouseLeave}
  ></page-selector>
\``,...u.parameters?.docs?.source}}};const B=["Default"];export{u as Default,B as __namedExportsOrder,C as default};
