import{i as u,a as c,x as l}from"./iframe-TPGbQXMN.js";import{n,t as d}from"./property-CjcnBI7P.js";var h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(r,t,i)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,o=(r,t,i,x)=>{for(var p=x>1?void 0:x?g(t,i):t,a=r.length-1,b;a>=0;a--)(b=r[a])&&(p=(x?b(t,i,p):b(p))||p);return x&&p&&h(t,i,p),p},y=(r,t,i)=>s(r,t+"",i);let e=class extends c{updateStyleVariable(r,t,i){const x=this[r]??i;this.style.setProperty(t,x)}updated(r){const t=(i,x,p)=>r.has(i)&&this.updateStyleVariable(i,x,p);t("compHeight","--text-button-comp-height","30px"),t("compWidth","--text-button-comp-width","60px"),t("buttonHeight","--text-button-height","100%"),t("buttonWidth","--text-button-width","100%"),t("buttonColor","--text-button-bg-color","#eceff1"),t("buttonHoverColor","--text-button-hover-bg-color","#b0bec5"),t("buttonActiveColor","--text-button-active-bg-color","#cfd8dc"),t("buttonShadow","--text-button-shadow","0px 2px 5px #d0d0d0"),t("textColor","--text-button-text-color","black"),t("textFontSize","--text-button-font-size","16px"),t("textFontWeight","--text-button-font-weight","bold"),t("textFontFamily","--text-button-font-family","Helvetica, Arial, sans-serif"),t("textShadow","--text-button-text-shadow","0px 2px 5px #d0d0d0"),t("textTransform","--text-button-text-transform","none"),t("textAlign","--text-button-text-align","center"),t("textLineHeight","--text-button-line-height","20px"),t("textContainerHeight","--text-button-text-container-height","100%"),t("textContainerWidth","--text-button-text-container-width","100%")}render(){const r=this.active?"active":"";return l`
      <button part="button" class=${r} @click=${this.handleClick}>
        <span part="text">${this.text??""}</span>
      </button>
    `}};y(e,"styles",u`
    :host {
      display: inline-block;
      height: var(--text-button-comp-height, 30px);
      width: var(--text-button-comp-width, 60px);
      max-height: var(--text-button-comp-height, 30px);
      max-width: var(--text-button-comp-width, 60px);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--text-button-height, 100%);
      width: var(--text-button-width, 100%);
      border: none;
      border-radius: 10px;
      box-shadow: 0px 2px 5px #d0d0d0;
      background-color: var(--text-button-bg-color, #eceff1);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    button:hover,
    button.active:hover {
      background-color: var(--text-button-hover-bg-color, #b0bec5);
    }

    button.active {
      background-color: var(--text-button-active-bg-color, #cfd8dc);
    }

    span {
      display: flex;
      justify-content: var(--text-button-text-align, center);
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;
      height: var(--text-button-text-container-height, 100%);
      width: var(--text-button-text-container-width, 100%);
      pointer-events: none;
      line-height: var(--text-button-line-height, 20px);
      font-size: var(--text-button-font-size, 16px);
      font-weight: var(--text-button-font-weight, bold);
      font-family: var(
        --text-button-font-family,
        'Helvetica',
        'Arial',
        sans-serif
      );
      text-shadow: var(--text-button-text-shadow, 0px 2px 5px #d0d0d0);
      color: var(--text-button-text-color, black);
      text-transform: var(--text-button-text-transform, none);
    }
  `);o([n({type:String})],e.prototype,"compHeight",2);o([n({type:String})],e.prototype,"compWidth",2);o([n({type:String})],e.prototype,"buttonHeight",2);o([n({type:String})],e.prototype,"buttonWidth",2);o([n({type:String})],e.prototype,"buttonColor",2);o([n({type:String})],e.prototype,"buttonHoverColor",2);o([n({type:String})],e.prototype,"buttonActiveColor",2);o([n({type:String})],e.prototype,"buttonShadow",2);o([n({type:Function})],e.prototype,"handleClick",2);o([n({type:String})],e.prototype,"text",2);o([n({type:String})],e.prototype,"textContainerHeight",2);o([n({type:String})],e.prototype,"textContainerWidth",2);o([n({type:String})],e.prototype,"textFontSize",2);o([n({type:String})],e.prototype,"textFontWeight",2);o([n({type:String})],e.prototype,"textFontFamily",2);o([n({type:String})],e.prototype,"textColor",2);o([n({type:String})],e.prototype,"textShadow",2);o([n({type:String})],e.prototype,"textTransform",2);o([n({type:String})],e.prototype,"textAlign",2);o([n({type:String})],e.prototype,"textLineHeight",2);o([n({type:Boolean})],e.prototype,"active",2);e=o([d("text-button")],e);
