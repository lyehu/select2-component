export const angularTemplateHtml = `<div [class]="containerStyle"><div class="selection" #selection [attr.tabindex]="!this.isOpen ? tabIndex : '-1'" (click)="toggleOpenAndClose()" (focus)="focusin()" (blur)="focusout()" (keydown)="openKey($event)" [class.select2-focused]="focused"><div [class]="selectionStyle" role="combobox"><span *ngIf="!multiple" class="select2-selection__rendered" [title]="option ? option.label : ''"><span *ngIf="!option">&nbsp;</span><ng-container *ngIf="option">{{option.label}}</ng-container><span [class.select2-selection__placeholder__option]="option" class="select2-selection__placeholder">{{placeholder}}</span></span><span *ngIf="!multiple" class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span><ul *ngIf="multiple" class="select2-selection__rendered"><span [class.select2-selection__placeholder__option]="option?.length > 0" class="select2-selection__placeholder">{{placeholder}}</span><li *ngFor="let op of option" class="select2-selection__choice" [title]="op.label"><span (click)="removeSelection($event, op)" class="select2-selection__choice__remove" role="presentation">×</span>{{op.label}}</li></ul></div><div class="select2-subscript-wrapper"><ng-content select="select2-hint"></ng-content></div></div><div [class]="dropdownStyle"><div class="select2-dropdown select2-dropdown--below"><div [class]="searchStyle"><input #searchInput [id]="id + '-search-field'" [(value)]="searchText" (keydown)="keyDown($event)" (keyup)="searchUpdate($event)" class="select2-search__field" type="search" role="textbox" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" [attr.tabindex]="this.isOpen ? tabIndex : '-1'"></div><div class="select2-results"><ul #results class="select2-results__options" role="tree" tabindex="-1" (keydown)="keyDown($event)"><ng-template ngFor [ngForOf]="filteredData" let-groupOrOption><li *ngIf="groupOrOption.options" class="select2-results__option" role="group"><strong [attr.class]="'select2-results__group' + (groupOrOption.classes ? ' ' + groupOrOption.classes : '')">{{groupOrOption.label}}</strong><ul class="select2-results__options select2-results__options--nested"><li *ngFor="let option of groupOrOption.options" [class]="getOptionStyle(option)" role="treeitem" [attr.aria-selected]="isSelected(option)" [attr.aria-disabled]="isDisabled(option)" (mouseenter)="mouseenter(option)" (click)="click(option)">{{option.label}}</li></ul></li><li *ngIf="!groupOrOption.options" [class]="getOptionStyle(groupOrOption)" role="treeitem" [attr.aria-selected]="isSelected(groupOrOption)" [attr.aria-disabled]="isDisabled(groupOrOption)" (mouseenter)="mouseenter(groupOrOption)" (click)="click(groupOrOption)">{{groupOrOption.label}}</li></ng-template></ul></div></div></div></div>`;
