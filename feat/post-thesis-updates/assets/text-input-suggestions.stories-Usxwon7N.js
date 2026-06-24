import{i as c,a as x,x as p}from"./iframe-DBkYCoPK.js";import{n as o,t as h}from"./property-NdQ_LbZ4.js";var d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,m=(t,e,n)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e,n,r)=>{for(var g=r>1?void 0:r?f(e,n):e,u=t.length-1,l;u>=0;u--)(l=t[u])&&(g=(r?l(e,n,g):l(g))||g);return r&&g&&d(e,n,g),g},y=(t,e,n)=>m(t,e+"",n);let i=class extends x{isFocused=!1;writeHandler(t){const e=t.target.value;this.onWrite&&this.onWrite(e),this.value=e}submitHandler(t){t.key==="Enter"&&this.onSubmit&&this.onSubmit(t.target.value)}updateStyleVariable(t,e,n){const r=this[t]??n;this.style.setProperty(e,r)}findLastChar(t,e){for(let n=t.length-1;n>=0;n--)if(e(t[n]))return n}selectSuggestion(t){if(!this.isSeparator)this.value=t;else{const e=this.value??"",n=this.findLastChar(e,this.isSeparator);n===void 0?this.value=t:this.value=e.slice(0,n)+" "+t}this.onWrite&&this.onWrite(this.value??"")}splitByPredicate(t,e){const n=[];let r="";for(const g of t)e(g)?(r&&n.push(r),r=""):r+=g;return r&&n.push(r),n}get filteredSuggestions(){if(!this.isFocused||!this.suggestionStrings)return[];const t=this.filterSuggTextTransform??(g=>g.toLowerCase()),e=this.value??"",n=this.isSeparator?this.splitByPredicate(e,this.isSeparator).map(g=>t(g)):[t(e)];if(!n)return this.suggestionStrings;const r=this.filterSuggPredicate?this.filterSuggPredicate:g=>{for(const u of n)if(g.includes(u))return!0;return!1};return this.suggestionStrings.filter(g=>r(t(g),n))}async focus(){await this.updateComplete,this.renderRoot?.querySelector("input")?.focus()}handleFocus(){this.isFocused=!0,this.requestUpdate()}handleBlur(){setTimeout(()=>{this.isFocused=!1,this.requestUpdate()},100)}updated(t){const e=(n,r,g)=>t.has(n)&&this.updateStyleVariable(n,r,g);e("inputHeight","--text-input-suggestions-height","26px"),e("inputWidth","--text-input-suggestions-width","500px"),e("inputBorderColor","--text-input-suggestions-border-color","#cfd8dc"),e("inputBorderRadius","--text-input-suggestions-border-radius","8px"),e("inputColor","--text-input-suggestions-background-color","#fafafa"),e("textColor","--text-input-suggestions-text-color","#333"),e("textFontSize","--text-input-suggestions-input-font-size","14px"),e("textFontWeight","--text-input-suggestions-input-font-weight","normal"),e("textFontFamily","--text-input-suggestions-input-font-family","'Helvetica', 'Arial', sans-serif"),e("componentZIndex","--text-input-suggestions-z-index","100"),e("containerGap","--text-input-suggestions-gap","3px"),e("suggListMinHeight","--text-input-suggestions-sugg-list-min-height","16px"),e("suggListMaxHeight","--text-input-suggestions-sugg-list-max-height","200px"),e("suggListWidth","--text-input-suggestions-sugg-list-width","495px"),e("suggListBorderRadius","--text-input-suggestions-sugg-list-border-radius","15px"),e("suggListBgColor","--text-input-suggestions-sugg-list-bg-color","#eceff1"),e("suggListOverflowY","--text-input-suggestions-sugg-list-overflow-y","auto"),e("suggLineHeight","--text-input-suggestions-sugg-line-height","28px"),e("suggFontSize","--text-input-suggestions-sugg-font-size","18px"),e("suggFontWeight","--text-input-suggestions-sugg-font-weight","normal"),e("suggFontFamily","--text-input-suggestions-sugg-font-family","'Helvetica', 'Arial', sans-serif"),e("suggItemBorderRadius","--text-input-suggestions-sugg-border-radius","15px"),e("suggPadding","--text-input-suggestions-sugg-padding","6px 10px"),e("suggHoverBgColor","--text-input-suggestions-sugg-hover-bg-color","white")}render(){return p`
      <div id="container" part="container">
        <input
          @focus=${()=>this.handleFocus()}
          @blur=${()=>this.handleBlur()}
          @keyup=${t=>this.writeHandler(t)}
          @keydown=${t=>this.submitHandler(t)}
          type="text"
          placeholder=${this.placeholder??""}
          .value=${this.value??""}
          id="text-input"
          part="text-input"
        />

        ${this.filteredSuggestions.length?p`
              <ul id="suggestions-list" part="suggestions-list">
                ${this.filteredSuggestions.map(t=>p`
                    <li @click=${()=>this.selectSuggestion(t)}>${t}</li>
                  `)}
              </ul>
            `:null}
      </div>
    `}};y(i,"styles",c`
    :host {
      display: block;
      height: fit-content;
      width: fit-content;
      z-index: var(--text-input-suggestions-z-index, 100);
    }

    #container {
      display: flex;
      flex-direction: column;
      height: fit-content;
      width: fit-content;
      align-items: center;
      justify-content: start;
      gap: var(--text-input-suggestions-gap, 3px);
    }

    #text-input {
      display: block;
      height: var(--text-input-suggestions-height, 26px);
      width: var(--text-input-suggestions-width, 500px);
      box-sizing: border-box;
      border-color: var(--text-input-suggestions-border-color, #cfd8dc);
      border-radius: var(--text-input-suggestions-border-radius, 8px);
      background-color: var(--text-input-suggestions-background-color, #fafafa);
      color: var(--text-input-suggestions-text-color, #333);
      font-size: var(--text-input-suggestions-input-font-size, 14px);
      font-weight: var(--text-input-suggestions-input-font-weight, normal);
      font-family: var(
        --text-input-suggestions-input-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
    }

    #suggestions-list {
      display: block;
      min-height: var(--text-input-suggestions-sugg-list-min-height, 16px);
      max-height: var(--text-input-suggestions-sugg-list-max-height, 200px);
      width: var(--text-input-suggestions-sugg-list-width, 495px);
      border-radius: var(
        --text-input-suggestions-sugg-list-border-radius,
        15px
      );
      background-color: var(
        --text-input-suggestions-sugg-list-bg-color,
        #eceff1
      );
      border: 1px solid #ddd;
      margin: 0;
      padding: 0;
      list-style: none;
      overflow-x: hidden;
      overflow-y: var(--text-input-suggestions-sugg-list-overflow-y, auto);
    }

    #suggestions-list li {
      height: fit-content;
      width: 100%;
      box-sizing: border-box;
      line-height: var(--text-input-suggestions-sugg-line-height, 28px);
      font-size: var(--text-input-suggestions-sugg-font-size, 18px);
      font-weight: var(--text-input-suggestions-sugg-font-weight, normal);
      font-family: var(
        --text-input-suggestions-sugg-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );

      border-radius: var(--text-input-suggestions-sugg-border-radius, 15px);
      padding: var(--text-input-suggestions-sugg-padding, 6px 10px);
      cursor: pointer;
    }

    #suggestions-list li:hover {
      background-color: var(
        --text-input-suggestions-sugg-hover-bg-color,
        white
      );
    }
  `);s([o({type:String})],i.prototype,"inputHeight",2);s([o({type:String})],i.prototype,"inputWidth",2);s([o({type:String})],i.prototype,"inputBorderColor",2);s([o({type:String})],i.prototype,"inputBorderRadius",2);s([o({type:String})],i.prototype,"inputColor",2);s([o({type:Function})],i.prototype,"onWrite",2);s([o({type:Function})],i.prototype,"onSubmit",2);s([o({type:String})],i.prototype,"textColor",2);s([o({type:String})],i.prototype,"textFontSize",2);s([o({type:String})],i.prototype,"textFontWeight",2);s([o({type:String})],i.prototype,"textFontFamily",2);s([o({type:String})],i.prototype,"componentZIndex",2);s([o({type:String})],i.prototype,"containerGap",2);s([o({type:String})],i.prototype,"suggListMinHeight",2);s([o({type:String})],i.prototype,"suggListMaxHeight",2);s([o({type:String})],i.prototype,"suggListWidth",2);s([o({type:String})],i.prototype,"suggListBorderRadius",2);s([o({type:String})],i.prototype,"suggListBgColor",2);s([o({type:String})],i.prototype,"suggListOverflowY",2);s([o({type:String})],i.prototype,"suggLineHeight",2);s([o({type:String})],i.prototype,"suggFontSize",2);s([o({type:String})],i.prototype,"suggFontWeight",2);s([o({type:String})],i.prototype,"suggFontFamily",2);s([o({type:String})],i.prototype,"suggItemBorderRadius",2);s([o({type:String})],i.prototype,"suggPadding",2);s([o({type:String})],i.prototype,"suggHoverBgColor",2);s([o({type:Function})],i.prototype,"filterSuggPredicate",2);s([o({type:Function})],i.prototype,"filterSuggTextTransform",2);s([o({type:Function})],i.prototype,"isSeparator",2);s([o({type:String})],i.prototype,"placeholder",2);s([o({type:String})],i.prototype,"value",2);s([o({type:Array})],i.prototype,"suggestionStrings",2);i=s([h("text-input-suggestions")],i);const v={title:"Components/Text/Text Input With Suggestions",tags:["autodocs"],parameters:{docs:{description:{component:"\n### `<text-input-suggestions>`\n\nText input component with suggestion list.\n\n#### CSS Custom Properties\n\n| Variable | Description |\n|----------|-------------|\n| `--text-input-suggestions-comp-height` | Height of outer wrapper |\n| `--text-input-suggestions-comp-width` | Width of outer wrapper |\n| `--text-input-suggestions-gap` | Gap between input and suggestion list |\n| `--text-input-suggestions-z-index` | Z-index of the whole component |\n| `--text-input-suggestions-height` | Input field height |\n| `--text-input-suggestions-width` | Input field width |\n| `--text-input-suggestions-border-color` | Input border color |\n| `--text-input-suggestions-border-radius` | Input border radius |\n| `--text-input-suggestions-background-color` | Input background color |\n| `--text-input-suggestions-text-color` | Text color inside input |\n| `--text-input-suggestions-input-font-size` | Font size of input text |\n| `--text-input-suggestions-input-font-weight` | Font weight of input text |\n| `--text-input-suggestions-input-font-family` | Font family for input text |\n| `--text-input-suggestions-sugg-list-min-height` | Minimum height of suggestion list |\n| `--text-input-suggestions-sugg-list-max-height` | Maximum height of suggestion list |\n| `--text-input-suggestions-sugg-list-width` | Width of suggestion list |\n| `--text-input-suggestions-sugg-list-border-radius` | Border radius of suggestion list |\n| `--text-input-suggestions-sugg-list-bg-color` | Background color of suggestion list |\n| `--text-input-suggestions-sugg-list-overflow-y` | Vertical overflow behavior |\n| `--text-input-suggestions-sugg-line-height` | Line height of suggestion items |\n| `--text-input-suggestions-sugg-font-size` | Font size of suggestion items |\n| `--text-input-suggestions-sugg-font-weight` | Font weight of suggestion items |\n| `--text-input-suggestions-sugg-font-family` | Font family of suggestion items |\n| `--text-input-suggestions-sugg-border-radius` | Border radius of suggestion items |\n| `--text-input-suggestions-sugg-padding` | Padding inside suggestion items |\n| `--text-input-suggestions-sugg-hover-bg-color` | Hover background color of suggestion items |\n\n#### Shadow DOM Parts\n\n| Part Name | Element | Description |\n|----------|---------|-------------|\n| `container` | `div` | Outer wrapper container |\n| `text-input` | `input` | The input element |\n| `suggestions-list` | `ul` | Suggestion list container |\n\n#### Methods\n\n| Method | Description |\n|--------|-------------|\n| `focus()` | Focuses the internal input element |\n        "}}},argTypes:{inputHeight:{control:"text",description:"Height of the input box",table:{category:"Input",defaultValue:{summary:"26px"}}},inputWidth:{control:"text",description:"Width of the input box",table:{category:"Input",defaultValue:{summary:"500px"}}},inputBorderColor:{control:"color",description:"Border color of the input box",table:{category:"Input",defaultValue:{summary:"#cfd8dc"}}},inputBorderRadius:{control:"text",description:"Border radius of the input box",table:{category:"Input",defaultValue:{summary:"8px"}}},inputColor:{control:"color",description:"Background color of the input box",table:{category:"Input",defaultValue:{summary:"#fafafa"}}},textColor:{control:"color",description:"Text color inside input",table:{category:"Text",defaultValue:{summary:"#333"}}},textFontSize:{control:"text",description:"Font size of input text",table:{category:"Text",defaultValue:{summary:"14px"}}},textFontWeight:{control:"text",description:"Font weight of input text",table:{category:"Text",defaultValue:{summary:"normal"}}},textFontFamily:{control:"text",description:"Font family of input text",table:{category:"Text",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},placeholder:{control:"text",description:"Placeholder text inside the input",table:{category:"Input",defaultValue:{summary:""}}},value:{control:"text",description:"Controlled value of the input",table:{category:"Input",defaultValue:{summary:""}}},suggestionStrings:{control:"object",description:"List of suggestion strings shown under the input",table:{category:"Suggestions"}},filterSuggPredicate:{control:!1,description:"Custom predicate to filter suggestions (suggestion: string, inputTokens: Array<string>) => boolean, where inputTokens is input of the text-input split by separator. If not set suggestion is filtered out if doesnt include any of the inputTokens.",defaultValue:{summary:"(s: string) => { for (const inputedString of v) { if (s.includes(inputedString)) { return true; }} return false; };"},table:{category:"Suggestions"}},filterSuggTextTransform:{description:"Function (s: string) => string which transforms text before filtering (e.g. toLowerCase, normalize)",table:{category:"Suggestions",defaultValue:{summary:"(s) => s.toLowerCase()"}}},isSeparator:{control:!1,description:"Function to determine separator characters for multi-token input. Used to split the text input into multiple tokens. If not set, the component treats the input as a single continuous string.",table:{category:"Suggestions"}},componentZIndex:{control:"text",description:"Z-index of the component",table:{category:"Layout",defaultValue:{summary:"100"}}},containerGap:{control:"text",description:"Gap between input and suggestion list",table:{category:"Layout",defaultValue:{summary:"3px"}}},suggListMinHeight:{control:"text",description:"Minimum height of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"16px"}}},suggListMaxHeight:{control:"text",description:"Maximum height of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"200px"}}},suggListWidth:{control:"text",description:"Width of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"495px"}}},suggListBorderRadius:{control:"text",description:"Border radius of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"15px"}}},suggListBgColor:{control:"color",description:"Background color of suggestion list",table:{category:"Suggestions",defaultValue:{summary:"#eceff1"}}},suggListOverflowY:{control:"text",description:"Overflow behavior for suggestion list",table:{category:"Suggestions",defaultValue:{summary:"auto"}}},suggLineHeight:{control:"text",description:"Line height of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"28px"}}},suggFontSize:{control:"text",description:"Font size of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"18px"}}},suggFontWeight:{control:"text",description:"Font weight of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"normal"}}},suggFontFamily:{control:"text",description:"Font family of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"'Helvetica', 'Arial', sans-serif"}}},suggItemBorderRadius:{control:"text",description:"Border radius of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"15px"}}},suggPadding:{control:"text",description:"Padding of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"6px 10px"}}},suggHoverBgColor:{control:"color",description:"Hover background color of suggestion items",table:{category:"Suggestions",defaultValue:{summary:"white"}}},onWrite:{action:"write",description:"Called whenever input value changes. Receives (value: string)",table:{category:"Events"}},onSubmit:{action:"submit",description:"Called when Enter key is pressed. Receives (value: string)",table:{category:"Events"}}}},a=t=>p`
  <text-input-suggestions
    .inputHeight=${t.inputHeight}
    .inputWidth=${t.inputWidth}
    .inputBorderColor=${t.inputBorderColor}
    .inputBorderRadius=${t.inputBorderRadius}
    .inputColor=${t.inputColor}
    .textColor=${t.textColor}
    .textFontSize=${t.textFontSize}
    .textFontWeight=${t.textFontWeight}
    .textFontFamily=${t.textFontFamily}
    .placeholder=${t.placeholder}
    .value=${t.value}
    .suggestionStrings=${t.suggestionStrings}
    .filterSuggPredicate=${t.filterSuggPredicate}
    .filterSuggTextTransform=${t.filterSuggTextTransform}
    .isSeparator=${t.isSeparator}
    .componentZIndex=${t.componentZIndex}
    .containerGap=${t.containerGap}
    .suggListMinHeight=${t.suggListMinHeight}
    .suggListMaxHeight=${t.suggListMaxHeight}
    .suggListWidth=${t.suggListWidth}
    .suggListBorderRadius=${t.suggListBorderRadius}
    .suggListBgColor=${t.suggListBgColor}
    .suggListOverflowY=${t.suggListOverflowY}
    .suggLineHeight=${t.suggLineHeight}
    .suggFontSize=${t.suggFontSize}
    .suggFontWeight=${t.suggFontWeight}
    .suggFontFamily=${t.suggFontFamily}
    .suggItemBorderRadius=${t.suggItemBorderRadius}
    .suggPadding=${t.suggPadding}
    .suggHoverBgColor=${t.suggHoverBgColor}
    .onWrite=${t.onWrite}
    .onSubmit=${t.onSubmit}
  ></text-input-suggestions>
`;a.args={inputHeight:"26px",inputWidth:"500px",inputBorderColor:"#cfd8dc",inputBorderRadius:"8px",inputColor:"#fafafa",textColor:"#333",textFontSize:"14px",textFontWeight:"normal",textFontFamily:"'Helvetica', 'Arial', sans-serif",placeholder:"Enter text...",value:"",suggestionStrings:["suggestion 1","suggestion 2"],filterSuggTextTransform:t=>t.toLowerCase(),isSeparator:void 0,componentZIndex:"100",containerGap:"3px",suggListMinHeight:"16px",suggListMaxHeight:"200px",suggListWidth:"495px",suggListBorderRadius:"15px",suggListBgColor:"#eceff1",suggListOverflowY:"auto",suggLineHeight:"28px",suggFontSize:"18px",suggFontWeight:"normal",suggFontFamily:"'Helvetica', 'Arial', sans-serif",suggItemBorderRadius:"15px",suggPadding:"6px 10px",suggHoverBgColor:"white",onWrite:t=>console.log("Write:",t),onSubmit:t=>console.log("Submit:",t)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => html\`
  <text-input-suggestions
    .inputHeight=\${args.inputHeight}
    .inputWidth=\${args.inputWidth}
    .inputBorderColor=\${args.inputBorderColor}
    .inputBorderRadius=\${args.inputBorderRadius}
    .inputColor=\${args.inputColor}
    .textColor=\${args.textColor}
    .textFontSize=\${args.textFontSize}
    .textFontWeight=\${args.textFontWeight}
    .textFontFamily=\${args.textFontFamily}
    .placeholder=\${args.placeholder}
    .value=\${args.value}
    .suggestionStrings=\${args.suggestionStrings}
    .filterSuggPredicate=\${args.filterSuggPredicate}
    .filterSuggTextTransform=\${args.filterSuggTextTransform}
    .isSeparator=\${args.isSeparator}
    .componentZIndex=\${args.componentZIndex}
    .containerGap=\${args.containerGap}
    .suggListMinHeight=\${args.suggListMinHeight}
    .suggListMaxHeight=\${args.suggListMaxHeight}
    .suggListWidth=\${args.suggListWidth}
    .suggListBorderRadius=\${args.suggListBorderRadius}
    .suggListBgColor=\${args.suggListBgColor}
    .suggListOverflowY=\${args.suggListOverflowY}
    .suggLineHeight=\${args.suggLineHeight}
    .suggFontSize=\${args.suggFontSize}
    .suggFontWeight=\${args.suggFontWeight}
    .suggFontFamily=\${args.suggFontFamily}
    .suggItemBorderRadius=\${args.suggItemBorderRadius}
    .suggPadding=\${args.suggPadding}
    .suggHoverBgColor=\${args.suggHoverBgColor}
    .onWrite=\${args.onWrite}
    .onSubmit=\${args.onSubmit}
  ></text-input-suggestions>
\``,...a.parameters?.docs?.source}}};const F=["Default"];export{a as Default,F as __namedExportsOrder,v as default};
