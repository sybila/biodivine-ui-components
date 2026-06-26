import{i as p,a as d,x as h}from"./iframe-_MpM58oJ.js";import{n as i,t as s}from"./property-BraZR-Uc.js";var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,m=(t,o,r)=>o in t?b(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,n=(t,o,r,a)=>{for(var c=a>1?void 0:a?g(o,r):o,x=t.length-1,l;x>=0;x--)(l=t[x])&&(c=(a?l(o,r,c):l(c))||c);return a&&c&&b(o,r,c),c},y=(t,o,r)=>m(t,o+"",r);let e=class extends d{updateStyleVariable(t,o,r){const a=this[t]??r;this.style.setProperty(o,a)}updated(t){const o=(r,a,c)=>t.has(r)&&this.updateStyleVariable(r,a,c);o("compHeight","--text-icon-button-comp-height","40px"),o("compWidth","--text-icon-button-comp-width","180px"),o("buttonHeight","--text-icon-button-height","100%"),o("buttonWidth","--text-icon-button-width","100%"),o("buttonColor","--text-icon-button-bg-color","#eceff1"),o("buttonHoverColor","--text-icon-button-hover-bg-color","#b0bec5"),o("buttonActiveColor","--text-icon-button-active-bg-color","#cfd8dc"),o("buttonShadow","--text-icon-button-shadow","0px 2px 5px #d0d0d0"),o("buttonJustifyContent","--text-icon-button-justify-content","space-around"),o("buttonAlignItems","--text-icon-button-align-items","center"),o("textColor","--text-icon-button-text-color","black"),o("textFontSize","--text-icon-button-font-size","16px"),o("textFontWeight","--text-icon-button-font-weight","bold"),o("textFontFamily","--text-icon-button-font-family","Helvetica, Arial, sans-serif"),o("textShadow","--text-icon-button-text-shadow","0px 2px 5px #d0d0d0"),o("textTransform","--text-icon-button-text-transform","none"),o("textAlign","--text-icon-button-text-align","center"),o("textLineHeight","--text-icon-button-line-height","20px"),o("textContainerHeight","--text-icon-button-text-container-height","100%"),o("textContainerWidth","--text-icon-button-text-container-width","80%"),o("iconSrc","--text-icon-button-icon-src",""),o("iconAlt","--text-icon-button-icon-alt","Icon"),o("iconHeight","--text-icon-button-icon-height","24px"),o("iconWidth","--text-icon-button-icon-width","24px")}render(){const t=this.active?"active":"";return h`
      <button part="button" class=${t} @click=${this.handleClick}>
        <span part="text">${this.text??""}</span>
        <img
          id="icon"
          part="icon"
          src="${this.iconSrc??""}"
          alt="${this.iconAlt??"Icon"}"
        />
      </button>
    `}};y(e,"styles",p`
    :host {
      display: inline-block;
      height: var(--text-icon-button-comp-height, 40px);
      width: var(--text-icon-button-comp-width, 180px);
      max-height: var(--text-icon-button-comp-height, 40px);
      max-width: var(--text-icon-button-comp-width, 180px);
    }

    button {
      display: flex;
      justify-content: var(--text-icon-button-justify-content, space-around);
      align-items: var(--text-icon-button-align-items, center);
      height: var(--text-icon-button-height, 100%);
      width: var(--text-icon-button-width, 100%);
      border: none;
      border-radius: 10px;
      box-shadow: 0px 2px 5px #d0d0d0;
      background-color: var(--text-icon-button-bg-color, #eceff1);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    button:hover,
    button.active:hover {
      background-color: var(--text-icon-button-hover-bg-color, #b0bec5);
    }

    button.active {
      background-color: var(--text-icon-button-active-bg-color, #cfd8dc);
    }

    span {
      display: flex;
      justify-content: var(--text-icon-button-text-align, center);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      height: var(--text-icon-button-text-container-height, 100%);
      width: var(--text-icon-button-text-container-width, 80%);
      max-width: var(--text-icon-button-text-container-width, 80%);
      pointer-events: none;
      line-height: var(--text-icon-button-line-height, 20px);
      font-size: var(--text-icon-button-font-size, 16px);
      font-weight: var(--text-icon-button-font-weight, bold);
      font-family: var(
        --text-icon-button-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--text-icon-button-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--text-icon-button-text-color, black);
      text-transform: var(--text-icon-button-text-transform, none);
    }

    #icon {
      height: var(--text-icon-button-icon-height, 24px);
      width: var(--text-icon-button-icon-width, 24px);
      max-height: var(--text-icon-button-icon-height, 24px);
      max-width: var(--text-icon-button-icon-width, 24px);
    }
  `);n([i({type:String})],e.prototype,"compHeight",2);n([i({type:String})],e.prototype,"compWidth",2);n([i({type:String})],e.prototype,"buttonHeight",2);n([i({type:String})],e.prototype,"buttonWidth",2);n([i({type:String})],e.prototype,"buttonColor",2);n([i({type:String})],e.prototype,"buttonHoverColor",2);n([i({type:String})],e.prototype,"buttonActiveColor",2);n([i({type:String})],e.prototype,"buttonShadow",2);n([i({type:String})],e.prototype,"buttonJustifyContent",2);n([i({type:String})],e.prototype,"buttonAlignItems",2);n([i({type:Function})],e.prototype,"handleClick",2);n([i({type:String})],e.prototype,"text",2);n([i({type:String})],e.prototype,"textContainerHeight",2);n([i({type:String})],e.prototype,"textContainerWidth",2);n([i({type:String})],e.prototype,"textFontSize",2);n([i({type:String})],e.prototype,"textFontWeight",2);n([i({type:String})],e.prototype,"textFontFamily",2);n([i({type:String})],e.prototype,"textColor",2);n([i({type:String})],e.prototype,"textShadow",2);n([i({type:String})],e.prototype,"textTransform",2);n([i({type:String})],e.prototype,"textAlign",2);n([i({type:String})],e.prototype,"textLineHeight",2);n([i({type:String})],e.prototype,"iconSrc",2);n([i({type:String})],e.prototype,"iconAlt",2);n([i({type:String})],e.prototype,"iconHeight",2);n([i({type:String})],e.prototype,"iconWidth",2);n([i({type:Boolean})],e.prototype,"active",2);e=n([s("text-icon-button")],e);const C={title:"Components/Buttons/Text Icon Button",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<text-icon-button>`\n\nA button with customizable text and icon content.\n\n#### CSS Custom Properties\n\n| Variable                                   | Description                             |\n|---------------------------------------------|-----------------------------------------|\n| `--text-icon-button-comp-height`          | Component container height              |\n| `--text-icon-button-comp-width`           | Component container width               |\n| `--text-icon-button-height`               | Button height                           |\n| `--text-icon-button-width`                | Button width                            |\n| `--text-icon-button-bg-color`             | Button background color                 |\n| `--text-icon-button-hover-bg-color`       | Button background color on hover        |\n| `--text-icon-button-active-bg-color`      | Button background color when active     |\n| `--text-icon-button-shadow`               | Box shadow applied to the button        |\n| `--text-icon-button-justify-content`      | Button content justification            |\n| `--text-icon-button-align-items`          | Button content alignment                |\n| `--text-icon-button-text-color`           | Text color                              |\n| `--text-icon-button-font-size`            | Text font size                          |\n| `--text-icon-button-font-weight`          | Text font weight                        |\n| `--text-icon-button-font-family`          | Text font family                        |\n| `--text-icon-button-text-shadow`          | Text shadow                             |\n| `--text-icon-button-text-transform`       | Text transformation (e.g., uppercase)   |\n| `--text-icon-button-text-align`           | Text alignment                          |\n| `--text-icon-button-line-height`          | Line height of the text                 |\n| `--text-icon-button-text-container-height`| Height of the text container            |\n| `--text-icon-button-text-container-width` | Width of the text container             |\n| `--text-icon-button-icon-height`          | Height of the icon                      |\n| `--text-icon-button-icon-width`           | Width of the icon                       |\n\n#### Shadow DOM Parts\n\n| Part Name   | Element          | Description           |\n|-------------|------------------|-----------------------|\n| `button`     | `<button>`        | The clickable button  |\n| `text`       | `<span>` inside   | The text label span   |\n| `icon`       | `<img>` inside    | The icon image        |\n        "}}},argTypes:{compHeight:{control:"text",description:"Height of the outer component container",table:{defaultValue:{summary:"40px"},category:"Layout"}},compWidth:{control:"text",description:"Width of the outer component container",table:{defaultValue:{summary:"180px"},category:"Layout"}},buttonHeight:{control:"text",description:"Height of the button",table:{defaultValue:{summary:"100%"},category:"Button"}},buttonWidth:{control:"text",description:"Width of the button",table:{defaultValue:{summary:"100%"},category:"Button"}},buttonColor:{control:"color",description:"Background color of the button",table:{defaultValue:{summary:"#eceff1"},category:"Button"}},buttonHoverColor:{control:"color",description:"Background color of the button on hover",table:{defaultValue:{summary:"#b0bec5"},category:"Button"}},buttonActiveColor:{control:"color",description:"Background color of the button when active",table:{defaultValue:{summary:"#cfd8dc"},category:"Button"}},buttonShadow:{control:"text",description:"Box shadow of the button",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Button"}},buttonJustifyContent:{control:"text",description:"Button content justification",table:{defaultValue:{summary:"space-around"},category:"Button"}},buttonAlignItems:{control:"text",description:"Button content alignment",table:{defaultValue:{summary:"center"},category:"Button"}},handleClick:{action:"clicked",description:"Click event handler",table:{type:{summary:"() => void"},category:"Events"},control:!1},text:{control:"text",description:"The text content shown inside the button",table:{category:"Text"}},textContainerHeight:{control:"text",description:"Height of the text container",table:{defaultValue:{summary:"100%"},category:"Text"}},textContainerWidth:{control:"text",description:"Width of the text container",table:{defaultValue:{summary:"80%"},category:"Text"}},textFontSize:{control:"text",description:"Font size of the text",table:{defaultValue:{summary:"16px"},category:"Text"}},textFontWeight:{control:"text",description:"Font weight of the text",table:{defaultValue:{summary:"bold"},category:"Text"}},textFontFamily:{control:"text",description:"Font family of the text",table:{defaultValue:{summary:"Helvetica, Arial, sans-serif"},category:"Text"}},textColor:{control:"color",description:"Color of the text",table:{defaultValue:{summary:"black"},category:"Text"}},textShadow:{control:"text",description:"Text shadow for the text",table:{defaultValue:{summary:"0px 2px 5px #d0d0d0"},category:"Text"}},textTransform:{control:"text",description:"Text transformation (e.g., uppercase, lowercase)",table:{defaultValue:{summary:"none"},category:"Text"}},textAlign:{control:"text",description:"Text alignment within the button",table:{defaultValue:{summary:"center"},category:"Text"}},textLineHeight:{control:"text",description:"Line height of the text",table:{defaultValue:{summary:"20px"},category:"Text"}},iconSrc:{control:"text",description:"Source URL for the icon image",table:{defaultValue:{summary:""},category:"Icon"}},iconAlt:{control:"text",description:"Alt text for the icon image",table:{defaultValue:{summary:"Icon"},category:"Icon"}},iconHeight:{control:"text",description:"Height of the icon",table:{defaultValue:{summary:"24px"},category:"Icon"}},iconWidth:{control:"text",description:"Width of the icon",table:{defaultValue:{summary:"24px"},category:"Icon"}},active:{control:"boolean",description:"Whether the button is in the active state",table:{defaultValue:{summary:"false"},category:"State"}}}},u=t=>h`
  <text-icon-button
    .compHeight=${t.compHeight}
    .compWidth=${t.compWidth}
    .buttonHeight=${t.buttonHeight}
    .buttonWidth=${t.buttonWidth}
    .buttonColor=${t.buttonColor}
    .buttonHoverColor=${t.buttonHoverColor}
    .buttonActiveColor=${t.buttonActiveColor}
    .buttonShadow=${t.buttonShadow}
    .buttonJustifyContent=${t.buttonJustifyContent}
    .buttonAlignItems=${t.buttonAlignItems}
    .handleClick=${t.handleClick}
    .text=${t.text}
    .textContainerHeight=${t.textContainerHeight}
    .textContainerWidth=${t.textContainerWidth}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .textColor=${t.textColor}
    .textShadow=${t.textShadow}
    .textTransform=${t.textTransform}
    .textAlign=${t.textAlign}
    .textLineHeight=${t.textLineHeight}
    .iconSrc=${t.iconSrc}
    .iconAlt=${t.iconAlt}
    .iconHeight=${t.iconHeight}
    .iconWidth=${t.iconWidth}
    .active=${t.active}
  ></text-icon-button>
`;u.args={compHeight:"40px",compWidth:"180px",buttonHeight:"100%",buttonWidth:"100%",buttonColor:"#eceff1",buttonHoverColor:"#b0bec5",buttonActiveColor:"#cfd8dc",buttonShadow:"0px 2px 5px #d0d0d0",buttonJustifyContent:"space-around",buttonAlignItems:"center",text:"Add Variable (N)",textContainerHeight:"100%",textContainerWidth:"80%",textFontSize:"16px",textFontWeight:"bold",textFontFamily:"Helvetica, Arial, sans-serif",textColor:"black",textShadow:"0px 2px 5px #d0d0d0",textTransform:"none",textAlign:"center",textLineHeight:"20px",iconSrc:"../../../public/assets/add_box-24px.svg",iconAlt:"Icon",iconHeight:"24px",iconWidth:"24px",active:!1};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => html\`
  <text-icon-button
    .compHeight=\${args.compHeight}
    .compWidth=\${args.compWidth}
    .buttonHeight=\${args.buttonHeight}
    .buttonWidth=\${args.buttonWidth}
    .buttonColor=\${args.buttonColor}
    .buttonHoverColor=\${args.buttonHoverColor}
    .buttonActiveColor=\${args.buttonActiveColor}
    .buttonShadow=\${args.buttonShadow}
    .buttonJustifyContent=\${args.buttonJustifyContent}
    .buttonAlignItems=\${args.buttonAlignItems}
    .handleClick=\${args.handleClick}
    .text=\${args.text}
    .textContainerHeight=\${args.textContainerHeight}
    .textContainerWidth=\${args.textContainerWidth}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .textColor=\${args.textColor}
    .textShadow=\${args.textShadow}
    .textTransform=\${args.textTransform}
    .textAlign=\${args.textAlign}
    .textLineHeight=\${args.textLineHeight}
    .iconSrc=\${args.iconSrc}
    .iconAlt=\${args.iconAlt}
    .iconHeight=\${args.iconHeight}
    .iconWidth=\${args.iconWidth}
    .active=\${args.active}
  ></text-icon-button>
\``,...u.parameters?.docs?.source}}};const w=["Default"];export{u as Default,w as __namedExportsOrder,C as default};
