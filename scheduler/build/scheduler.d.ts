declare module "bryntum-scheduler" {

    export class Base {
        // properties
        config: object;
        // functions
        constructor(args: any);
        callback(fn: string|Function, thisObj: object, args: Array<object>): void;
        destroy(): void;
        setConfig(config: object): void;
    }

    export class BryntumWidgetAdapter {
        
        
    }

    export class AjaxStore extends Store {
        // properties
        isCommitting: boolean;
        isLoading: boolean;
        // functions
        commit(): Promise<any>;
        load(params: object): Promise<any>;
        loadChildren(parentRecord: Model): Promise<any>;
    }

    export class Model {
        // properties
        static autoExposeFields: boolean;
        static childrenField: string;
        static convertEmptyParentToLeaf: boolean;
        static fieldMap: object;
        static fields: Array<object>;
        static idField: string;
        static parentIdField: string;
        allChildren: Array<Model>;
        descendantCount: number;
        fieldNames: Array<string>;
        fields: Array<any>;
        firstChild: Model;
        firstStore: Store;
        hasGeneratedId: boolean;
        id: string|number;
        internalId: number;
        isBatchUpdating: boolean;
        isCommitting: boolean;
        isLeaf: boolean;
        isLoaded: boolean;
        isModified: boolean;
        isParent: boolean;
        isPhantom: boolean;
        isValid: boolean;
        json: string;
        lastChild: Model;
        modifications: object;
        nextSibling: Model;
        previousSibling: Model;
        previousSiblingsTotalCount: number;
        visibleDescendantCount: number;
        // functions
        constructor(data: object);
        static asId(model: Model|string|number): string|number;
        static getFieldDefinition(fieldName: any): object;
        static processField(fieldName: any, value: any): any;
        appendChild(childRecord: any): Model;
        beginBatch(): void;
        bubble(fn: Function): void;
        bubbleWhile(fn: Function): boolean;
        contains(child: Model|string|number): boolean;
        copy(newId: any): Model;
        endBatch(silent?: boolean): void;
        get(fieldName: any): any;
        getDataSource(fieldName: any): string;
        getFieldDefinition(fieldName: any): object;
        remove(): void;
        removeChild(childRecord: any): void;
        set(field: string, value: any, silent?: boolean): void;
        traverse(fn: any): void;
        traverseWhile(fn: Function): boolean;
    }

    export class Store {
        // properties
        static stores: Array<Store>;
        autoCommit: boolean;
        changes: object;
        count: number;
        data: Array<object>;
        filters: object;
        first: Model;
        groupers: Array<object>;
        isChained: boolean;
        isFiltered: boolean;
        isGrouped: boolean;
        isSorted: boolean;
        isTree: boolean;
        last: Model;
        leaves: Array<Model>;
        modelClass: { new(data: object): Model };
        originalCount: number;
        records: Array<Model>;
        sorters: Array<object>;
        storeId: string|number;
        // functions
        static getStore(storeId: string|number|Array<object>): Store;
        add(records: Model|Array<Model>|object|Array<object>, silent?: boolean): Array<Model>;
        addListener(config: object, thisObj?: object, prio?: number): Function;
        addSorter(field: string|object, ascending?: boolean): void;
        applyChangesFromStore(otherStore: Store): void;
        average(field: string, records: Array<Model>): number;
        beginBatch(): void;
        clearFilters(): void;
        clearGroupers(): void;
        clearSorters(): void;
        commit(): object;
        createRecord(data: any, skipExpose?: any): void;
        createSorterFn(sorters: any): Function;
        endBatch(): void;
        filter(field: string|object|Array<object>|Function, value: any): void;
        filterBy(fn: Function): void;
        find(fn: Function): Model;
        findByField(field: any, value: any): any;
        findRecord(fieldName: string, value: any): Model;
        forEach(fn: Function, thisObj: object): void;
        getAt(index: number): Model;
        getById(id: any): Model;
        getByInternalId(internalId: number): Model;
        getCount(countProcessed?: any): number;
        getDistinctValues(field: any): Array<any>;
        getGroupRecords(groupValue: any): Array<Model>;
        getGroupTitles(): Array<string>;
        getNext(recordOrId: any, wrap?: boolean): Model;
        getPrev(recordOrId: any, wrap?: boolean): Model;
        getRange(start: number, end: number): Array<Model>;
        getValueCount(field: any, value: any): number;
        group(field: string, ascending: boolean, add?: boolean, performSort?: boolean, silent?: boolean): void;
        groupSum(groupValue: any, field: string): number;
        hasListener(eventName: string): boolean;
        includes(recordOrId: any): boolean;
        indexOf(recordOrId: any, visibleRecords?: boolean): number;
        insert(index: any, records: any): Array<Model>;
        isRecordInGroup(record: Model, groupValue: any): boolean;
        loadChildren(parentRecord: Model): void;
        makeChained(chainedFilterFn: Function, chainedFields: Array<string>): StoreChained;
        map(fn: Function): Array<any>;
        max(field: string, records: Array<Model>): number;
        min(field: string, records: Array<Model>): number;
        move(item: object, beforeItem: object): void;
        on(config: any, thisObj: any): void;
        query(fn: any): Array<Model>;
        reduce(fn: Function, initialValue: any): any;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        remove(toRemove: Array<Model>, silent?: boolean): Array<Model>;
        removeAll(silent: any): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        removeSorter(field: any): void;
        resumeEvents(): void;
        search(find: any, fields: Array<object>): any;
        some(fn: any): boolean;
        sort(field: string|object, ascending: boolean, add?: boolean, silent?: boolean): void;
        sum(field: string, records: Array<Model>): number;
        suspendEvents(queue?: boolean): void;
        traverse(fn: Function): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class StoreCRUD {
        // properties
        autoCommit: boolean;
        changes: object;
        // functions
        add(records: Model|Array<Model>|object|Array<object>, silent?: boolean): Array<Model>;
        applyChangesFromStore(otherStore: Store): void;
        commit(): object;
        insert(index: any, records: any): Array<Model>;
        move(item: object, beforeItem: object): void;
        remove(toRemove: Array<Model>, silent?: boolean): Array<Model>;
        removeAll(silent: any): void;
    }

    export class StoreChained {
        // properties
        isChained: boolean;
        
    }

    export class StoreFilter {
        // properties
        filters: object;
        isFiltered: boolean;
        // functions
        clearFilters(): void;
        filter(field: string|object|Array<object>|Function, value: any): void;
        filterBy(fn: Function): void;
    }

    export class StoreGroup {
        // properties
        groupers: Array<object>;
        isGrouped: boolean;
        // functions
        clearGroupers(): void;
        getGroupRecords(groupValue: any): Array<Model>;
        getGroupTitles(): Array<string>;
        group(field: string, ascending: boolean, add?: boolean, performSort?: boolean, silent?: boolean): void;
        isRecordInGroup(record: Model, groupValue: any): boolean;
    }

    export class StoreSearch {
        
        // functions
        find(fn: Function): Model;
        findByField(field: any, value: any): any;
        findRecord(fieldName: string, value: any): Model;
        query(fn: any): Array<Model>;
        search(find: any, fields: Array<object>): any;
        some(fn: any): boolean;
    }

    export class StoreSort {
        // properties
        isSorted: boolean;
        sorters: Array<object>;
        // functions
        addSorter(field: string|object, ascending?: boolean): void;
        clearSorters(): void;
        createSorterFn(sorters: any): Function;
        removeSorter(field: any): void;
        sort(field: string|object, ascending: boolean, add?: boolean, silent?: boolean): void;
    }

    export class StoreSum {
        
        // functions
        average(field: string, records: Array<Model>): number;
        groupSum(groupValue: any, field: string): number;
        max(field: string, records: Array<Model>): number;
        min(field: string, records: Array<Model>): number;
        sum(field: string, records: Array<Model>): number;
    }

    export class StoreTree {
        // properties
        isTree: boolean;
        leaves: Array<Model>;
        // functions
        loadChildren(parentRecord: Model): void;
    }

    export class StateTrackingManager {
        // properties
        canRedo: boolean;
        canUndo: boolean;
        disabled: boolean;
        isReady: boolean;
        isRecording: boolean;
        isRestoring: boolean;
        length: number;
        position: number;
        queue: Array<string>;
        state: StateBase;
        // functions
        addStore(store: Store): void;
        disable(): void;
        enable(): void;
        forEachStore(fn: Function): void;
        getStoreById(storeId: string|number): Store;
        hasStore(store: Store): boolean;
        redo(steps?: number): void;
        redoAll(): void;
        removeStore(store: Store): void;
        resetQueue(): void;
        startTransaction(title?: string): void;
        stopTransaction(title?: string): void;
        undo(steps?: number): void;
        undoAll(): void;
    }

    export class ActionBase {
        // properties
        type: string;
        // functions
        redo(): void;
        undo(): void;
    }

    export class AddAction {
        
        
    }

    export class AppendChildAction {
        
        
    }

    export class InsertAction {
        
        
    }

    export class InsertChildAction {
        
        
    }

    export class RemoveAction {
        
        
    }

    export class RemoveAllAction {
        
        
    }

    export class UpdateAction {
        
        
    }

    export class ModelStm {
        
        
    }

    export class StoreStm {
        
        
    }

    export class StateBase {
        
        
    }

    export class AjaxHelper {
        
        // functions
        static get(url: string): Promise<any>;
        static post(url: string, data: string): Promise<any>;
    }

    export class DateHelper {
        // properties
        static weekStartDay: any;
        // functions
        static add(date: Date, amount: number, unit?: string): Date;
        static as(toUnit: any, amount: any, fromUnit?: any): number;
        static asMilliseconds(amount: number|string, unit: string): number;
        static betweenLesser(date: Date, start: Date, end: Date): boolean;
        static betweenLesserEqual(date: Date, start: Date, end: Date): boolean;
        static clearTime(date: Date, clone?: boolean): Date;
        static clone(date: Date): Date;
        static compare(first: Date, second: Date, unit: string): number;
        static compareUnits(unit1: string, unit2: string): void;
        static constrain(date: Date, min: Date, max: Date): Date;
        static convertToPickerFormat(bryntumFormat: string): string;
        static create(definition: object): Date;
        static daysInMonth(date: Date): number;
        static diff(start: Date, end: Date, unit?: string, fractional?: boolean): number;
        static format(date: Date, format: string): string;
        static formatCount(count: number, unit: string): string;
        static get(date: Date, unit: string): void;
        static getDurationInUnit(start: Date, end: Date, unit: string): number;
        static getEndOfPreviousDay(date: Date, noNeedToClearTime: boolean): Date;
        static getFirstDateOfMonth(date: Date): Date;
        static getLastDateOfMonth(date: Date): Date;
        static getLocalizedNameOfUnit(unit: string, plural: boolean): string;
        static getMeasuringUnit(unit: any): any;
        static getNext(date: Date, unit: string, increment?: number, weekStartDay?: number): Date;
        static getShortNameOfUnit(unit: string): string;
        static getStartOfNextDay(date: Date, clone: boolean, noNeedToClearTime: boolean): Date;
        static getUnitToBaseUnitRatio(baseUnit: string, unit: string, acceptEstimate?: boolean): number;
        static intersectSpans(date1Start: Date, date1End: Date, date2Start: Date, date2End: Date): boolean;
        static isAfter(first: any, second: any): boolean;
        static isBefore(first: any, second: any): boolean;
        static isEqual(first: any, second: any, unit: any): boolean;
        static isStartOf(date: Date, unit: string): boolean;
        static max(first: Date, second: Date): Date;
        static min(first: Date, second: Date): Date;
        static normalizeUnit(unit: string): string;
        static parse(dateString: string, format: string): Date;
        static parseDuration(value: string, allowDecimals?: boolean, defaultUnit?: string): object;
        static parseTimeUnit(unitName: any): void;
        static set(date: Date, unit: string|object, amount: number): Date;
        static startOf(date: Date, unit?: string, clone?: boolean): Date;
        static timeSpanContains(spanStart: Date, spanEnd: Date, otherSpanStart: Date, otherSpanEnd: Date): boolean;
    }

    export class DomHelper {
        // properties
        static scrollBarWidth: number;
        static themeInfo: object;
        // functions
        static addClasses(element: HTMLElement, classes: Array<string>): void;
        static addLeft(element: HTMLElement, x: any): void;
        static addTop(element: HTMLElement, y: any): void;
        static addTranslateX(element: HTMLElement, x: number): void;
        static addTranslateY(element: HTMLElement, y: number): void;
        static append(parentElement: HTMLElement, elementOrConfig: HTMLElement|object|string): HTMLElement;
        static applyStyle(element: HTMLElement, style: string|object): void;
        static children(element: HTMLElement, selector: string): Array<HTMLElement>;
        static createElement(config: object, returnAll?: boolean): HTMLElement|Array<HTMLElement>|object;
        static down(element: HTMLElement, selector: string): HTMLElement;
        static focusWithoutScrolling(element: HTMLElement): void;
        static forEachChild(element: HTMLElement, fn: Function): void;
        static forEachSelector(element: HTMLElement, selector: string, fn: Function): void;
        static getChild(element: HTMLElement, selector: string): HTMLElement;
        static getId(element: HTMLElement): void;
        static getOffsetX(element: HTMLElement, container: HTMLElement): number;
        static getOffsetXY(element: HTMLElement, container: HTMLElement): Array<number>;
        static getOffsetY(element: HTMLElement, container: HTMLElement): number;
        static getPageX(element: HTMLElement): number;
        static getPageY(element: HTMLElement): number;
        static getStyleValue(element: HTMLElement, propName: string|Array<string>, inline?: boolean): string|object;
        static getTranslateX(element: HTMLElement): number;
        static getTranslateXY(element: HTMLElement): Array<number>;
        static getTranslateY(element: HTMLElement): number;
        static hasChild(element: HTMLElement, selector: string): boolean;
        static highlight(element: Rectangle): void;
        static insertBefore(into: HTMLElement, element: HTMLElement, beforeElement: HTMLElement): HTMLElement;
        static insertFirst(into: HTMLElement, element: HTMLElement): HTMLElement;
        static isDescendant(parentElement: HTMLElement, childElement: HTMLElement): boolean;
        static isFocusable(element: HTMLElement): void;
        static makeValidId(id: string): string;
        static measureSize(size: string, sourceElement: HTMLElement): number;
        static measureText(text: string, sourceElement: HTMLElement): number;
        static removeClasses(element: HTMLElement, classes: Array<string>): void;
        static removeEachSelector(element: HTMLElement, selector: string): void;
        static setLeft(element: HTMLElement, x: number|string): void;
        static setLength(element: string|HTMLElement, style?: string, value?: number|string): string;
        static setTheme(newThemeName: string): Promise<any>;
        static setTop(element: HTMLElement, y: number|string): void;
        static setTranslateX(element: HTMLElement, x: number): void;
        static setTranslateXY(element: HTMLElement, x?: number, y?: number): void;
        static setTranslateY(element: HTMLElement, y: number): void;
        static sync(stringOrElement: string|HTMLElement, targetElement: HTMLElement): void;
        static syncClassList(element: HTMLElement, newClasses: Array<string>|string|object): void;
        static up(element: HTMLElement, selector: string): HTMLElement;
    }

    export class DragHelper {
        
        // functions
        constructor(config: object);
        abort(): void;
        addListener(config: object, thisObj?: object, prio?: number): Function;
        hasListener(eventName: string): boolean;
        on(config: any, thisObj: any): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        resumeEvents(): void;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class StringHelper {
        
        // functions
        static capitalizeFirstLetter(string: any): string;
        static createId(inString: any): string;
        static hyphenate(string: any): string;
        static lowercaseFirstLetter(string: any): string;
        static safeJsonParse(string: string): object;
        static safeJsonStringify(object: object): object;
    }

    export class WidgetHelper {
        // properties
        static adapter: any;
        static hasAdapter: boolean;
        // functions
        static append(widget: object|Array<object>, config?: HTMLElement|string|object): Array<Widget>;
        static attachTooltip(element: any, configOrText: any): object;
        static createWidget(config: any): object;
        static destroyTooltipAttached(element: any): void;
        static getById(id: any): object;
        static hasTooltipAttached(element: any): boolean;
        static mask(element: any, msg: any): void;
        static openPopup(element: any, config: any): any|object;
        static showContextMenu(element: HTMLElement|Array<number>, config: object): any|object;
        static unmask(element: any): void;
    }

    export class DomClassList {
        
        // functions
        add(classes: string): void;
        remove(classes: string): void;
    }

    export class Point extends Rectangle {
        
        // functions
        constrain(into: Rectangle): void;
    }

    export class Rectangle {
        // properties
        bottom: number;
        center: Point;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
        // functions
        static client(element: any, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static content(element: any, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static from(element: HTMLElement, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static inner(element: any, relativeTo?: HTMLElement, ignorePageScroll?: boolean): Rectangle;
        static union(rectangles: Array<Rectangle>): Rectangle;
        adjust(x: number, y: number, width: number, height: number): void;
        alignTo(spec: object): Rectangle;
        clone(): void;
        constrainTo(constrainTo: Rectangle, strict: boolean): void;
        contains(other: any): boolean;
        getAlignmentPoint(alignmentPoint: string, offsets: Array<number>): void;
        getDelta(other: Point): void;
        highlight(): void;
        inflate(amount: number): Rectangle;
        intersect(other: Rectangle, useBoolean?: boolean): Rectangle|boolean;
        moveTo(x: number, y: number): void;
        translate(x: number, y: number): void;
    }

    export class Scroller extends Base {
        // properties
        clientHeight: number;
        clientWidth: number;
        id: string;
        maxX: number;
        maxY: number;
        overflowX: boolean|string;
        overflowY: boolean|string;
        scrollHeight: number;
        scrollWidth: number;
        viewport: Rectangle;
        x: number;
        y: number;
        // functions
        addPartner(otherScroller: Scroller, axes?: string|object): void;
        removePartner(otherScroller: Scroller): void;
        scrollBy(xDelta?: number, yDelta?: number, options?: object|boolean): Promise<any>;
        scrollIntoView(element: HTMLElement|Rectangle, options?: object): Promise<any>;
        scrollTo(toX?: number, toY?: number, options?: object|boolean): Promise<any>;
    }

    export class LocaleManager {
        // properties
        locale: string|object;
        // functions
        applyLocale(name: string): boolean|Promise<any>;
        extendLocale(name: any, config: any): void;
        registerLocale(name: any, config: any): void;
    }

    export class Localizable {
        // properties
        localeManager: LocaleManager;
        // functions
        static L(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
    }

    export class Events {
        
        // functions
        addListener(config: object, thisObj?: object, prio?: number): Function;
        hasListener(eventName: string): boolean;
        on(config: any, thisObj: any): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        resumeEvents(): void;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class InstancePlugin {
        // properties
        client: Widget;
        localeManager: LocaleManager;
        // functions
        static L(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object, thisObj?: object, prio?: number): Function;
        hasListener(eventName: string): boolean;
        on(config: any, thisObj: any): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        resumeEvents(): void;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class Override {
        
        // functions
        static apply(override: any): void;
    }

    export class Pluggable {
        // properties
        plugins: object;
        // functions
        addPlugins(plugins: any): void;
        getPlugin(pluginClassOrName: any): object;
        hasPlugin(pluginClassOrName: any): boolean;
    }

    export class State {
        // properties
        state: object;
        
    }

    export class ClickRepeater {
        
        
    }

    export class Collection {
        // properties
        allValues: Array<object>;
        count: number;
        filterFunction: Function;
        filters: Collection;
        generation: number;
        idProperty: string;
        isFiltered: boolean;
        isSorted: boolean;
        sortFunction: Function;
        sorters: Collection;
        totalCount: number;
        values: Array<object>;
        // functions
        add(items: object): void;
        addFilter(filter: object): CollectionFilter;
        addSorter(sorter: object): CollectionSorter;
        changeId(item: string|number|object, newId: string|number): void;
        clear(): void;
        find(fn: Function, ignoreFilters?: boolean): object;
        findIndex(propertyName: string, value: any, ignoreFilters?: boolean): number;
        forEach(fn: Function, ignoreFilters?: boolean): void;
        get(id: any, ignoreFilters?: boolean): object;
        getBy(propertyName: string, value: any, ignoreFilters?: boolean): object;
        includes(item: object|string|number, ignoreFilters?: boolean): boolean;
        indexOf(item: object, ignoreFilters?: boolean): number;
        map(fn: Function, ignoreFilters?: boolean): Array<object>;
        move(item: object, beforeItem?: object): number;
        remove(items: object): void;
        splice(index?: number, toRemove?: Array<object>|number, toAdd?: Array<object>|object): void;
    }

    export class CollectionFilter {
        // properties
        filterBy: Function;
        operator: string;
        property: string;
        value: any;
        
    }

    export class CollectionSorter {
        
        
    }

    export class Month {
        // properties
        dayCount: number;
        endDate: Date;
        startDate: Date;
        weekCount: number;
        // functions
        constructor(config: object);
        eachDay(fn: Function): void;
        eachWeek(fn: Function): void;
    }

    export class Button extends Widget implements Badge {
        // properties
        badge: string;
        icon: string;
        pressed: boolean;
        text: string;
        // functions
        toggle(pressed: boolean): void;
    }

    export class CalendarPanel {
        // properties
        date: Date;
        weekStartDay: any;
        
    }

    export class Checkbox extends Widget {
        // properties
        checked: boolean;
        readOnly: boolean;
        text: string;
        value: string;
        // functions
        check(): void;
        toggle(): void;
        uncheck(): void;
    }

    export class ChipView extends List {
        
        
    }

    export class Combo extends PickerField {
        // properties
        static queryAll: symbol;
        static queryLast: symbol;
        chipView: any;
        hidePickerOnSelect: any;
        record: Array<Model>;
        records: Array<Model>;
        store: Store;
        value: object;
        valueCollection: any;
        
    }

    export class Container extends Widget {
        // properties
        items: Array<Widget>;
        layout: any;
        layoutStyle: object;
        record: Model;
        // functions
        eachWidget(fn: Function, deep?: boolean): void;
        getWidgetById(id: string): Widget;
        processWidgetConfig(): void;
        query(filter: Function): Widget;
        queryAll(filter: Function): Array<Widget>;
    }

    export class DateField extends PickerField {
        // properties
        max: Date|string;
        min: Date|string;
        
    }

    export class DurationField extends TextField {
        // properties
        milliseconds: number;
        value: string|number|object;
        
    }

    export class Editor extends Container {
        
        // functions
        cancelEdit(): void;
        completeEdit(): void;
        startEdit(editObject: object): void;
    }

    export class Field extends Widget implements Badge {
        // properties
        static errorTip: Tooltip;
        badge: string;
        errorTip: Tooltip;
        isEmpty: boolean;
        isValid: boolean;
        label: string;
        readOnly: boolean;
        triggers: object;
        value: any;
        // functions
        clearError(error: string, silent?: boolean): void;
        getErrors(): Array<string>;
        select(start?: number, end?: number): void;
        setError(error: string, silent?: boolean): void;
    }

    export class List extends Widget {
        // properties
        items: Array<object>;
        store: Store;
        
    }

    export class Mask {
        // properties
        text: string;
        // functions
        static mask(text: string|object, element: HTMLElement): Mask;
        static unmask(element: HTMLElement): Promise<any>;
        close(): Promise<any>;
        hide(): Promise<any>;
        show(): void;
    }

    export class Menu extends Popup {
        // properties
        currentSubMenu: Menu;
        isSubMenu: boolean;
        parentMenu: Menu;
        selectedElement: HTMLElement;
        
    }

    export class MenuItem extends Widget {
        // properties
        checked: boolean;
        menu: Widget;
        // functions
        doAction(): void;
    }

    export class NumberField extends Field {
        
        
    }

    export class Panel extends Container {
        // properties
        tools: object;
        
    }

    export class PickerField extends TextField {
        
        // functions
        hidePicker(): void;
        showPicker(): void;
        togglePicker(): void;
    }

    export class Popup extends Panel {
        
        // functions
        close(): void;
    }

    export class Slider extends Widget {
        // properties
        max: number;
        min: number;
        step: number;
        text: string;
        value: number;
        
    }

    export class TabPanel extends Widget {
        // properties
        activeIndex: number;
        activeItem: Widget;
        activeTab: Widget|number;
        
    }

    export class TextAreaField extends Field {
        
        
    }

    export class TextField extends Field {
        
        
    }

    export class TimeField extends PickerField {
        // properties
        max: Date|string;
        min: Date|string;
        value: Date|string;
        // functions
        focusPicker(): void;
        showPicker(): void;
    }

    export class Toast {
        
        // functions
        static show(msgOrConfig: string|object): Toast;
        hide(): void;
        show(): void;
    }

    export class Tool extends Widget {
        
        
    }

    export class Toolbar extends Container {
        
        
    }

    export class Tooltip extends Widget {
        // properties
        static currentOverElement: HTMLElement;
        activeTarget: HTMLElement;
        textContent: any;
        
    }

    export class Widget extends Base implements Events, Localizable {
        // properties
        alignSelf: string;
        anchorSize: Array<number>;
        contentElement: HTMLElement;
        dataset: object;
        disabled: boolean;
        element: HTMLElement;
        flex: number|string;
        focusElement: HTMLElement;
        height: number|string;
        hidden: boolean;
        html: string;
        id: string;
        localeManager: LocaleManager;
        margin: number|string;
        maxHeight: string|number;
        maxWidth: string|number;
        minHeight: string|number;
        minWidth: string|number;
        owner: any;
        style: string|object|CSSStyleDeclaration;
        tooltip: string|object;
        visible: boolean;
        width: number|string;
        x: any;
        y: any;
        // functions
        static L(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object, thisObj?: object, prio?: number): Function;
        alignTo(spec: object): void;
        disable(): void;
        enable(): void;
        focus(): void;
        hasListener(eventName: string): boolean;
        hide(): Promise<any>;
        mask(msg: string|object): Mask;
        on(config: any, thisObj: any): void;
        owns(target: HTMLElement|Widget): void;
        parseTRBL(values: number|string|Array<string>, units?: string): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        resumeEvents(): void;
        revertFocus(): void;
        setXY(x?: number, y?: number): void;
        show(): Promise<any>;
        showBy(spec: object|HTMLElement): void;
        suspendEvents(queue?: boolean): void;
        toFront(): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
        unmask(): void;
    }

    export class Card {
        // properties
        activeIndex: number;
        activeItem: Widget;
        // functions
        setActiveItem(activeItem: Widget|number): object;
    }

    export class Fit {
        
        
    }

    export class Layout {
        // properties
        containerCls: any;
        itemCls: any;
        
    }

    export class Badge {
        // properties
        badge: string;
        
    }

    export class CheckColumn extends Column {
        
        
    }

    export class Column extends Model implements Events, Localizable {
        // properties
        defaults: object;
        element: HTMLElement;
        flex: string;
        hidden: boolean;
        icon: string;
        localeManager: LocaleManager;
        text: string;
        textElement: HTMLElement;
        textWrapper: HTMLElement;
        width: number;
        // functions
        static L(text: string, templateData?: object): string;
        L(text: string, templateData?: object): string;
        addListener(config: object, thisObj?: object, prio?: number): Function;
        hasListener(eventName: string): boolean;
        hide(): void;
        on(config: any, thisObj: any): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        resizeToFitContent(): void;
        resumeEvents(): void;
        show(): void;
        suspendEvents(queue?: boolean): void;
        toggle(force: boolean): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class DateColumn extends Column {
        
        
    }

    export class NumberColumn extends Column {
        
        
    }

    export class PercentColumn extends Column {
        
        
    }

    export class RatingColumn extends NumberColumn {
        
        
    }

    export class RowNumberColumn extends Column {
        
        // functions
        resizeToFitContent(): void;
    }

    export class TemplateColumn extends Column {
        
        
    }

    export class TreeColumn extends Column {
        
        
    }

    export class WidgetColumn extends Column {
        
        
    }

    export class GridTag {
        
        
    }

    export class ColumnStore extends Store {
        // properties
        bottomColumns: Array<Column>;
        visibleColumns: Array<Column>;
        // functions
        static registerColumnType(columnClass: any): void;
        get(field: string): Column;
        indexOf(recordOrId: any): number;
    }

    export class GridRowModel extends Model {
        
        
    }

    export class GridStorePlugin extends InstancePlugin {
        
        // functions
        clearGroupers(): void;
        forEach(fn: Function, thisObj: object): void;
        getAdjacent(recordOrId: string|Model, next?: boolean, wrap?: boolean, skipSpecialRows?: boolean): Model;
        getNext(recordOrId: any, wrap?: boolean, skipSpecialRows?: boolean): Model;
        getPrev(recordOrId: any, wrap?: boolean, skipSpecialRows?: boolean): Model;
        isRecordInGroup(record: any, groupValue: any): boolean;
        sort(field: any, ascending: any, add: any, quiet: any): void;
    }

    export class CellEdit extends InstancePlugin {
        // properties
        isEditing: boolean;
        // functions
        cancelEditing(silent?: boolean): void;
        finishEditing(): void;
        startEditing(cellContext: object): boolean;
    }

    export class CellTooltip extends InstancePlugin {
        
        
    }

    export class ColumnDragToolbar extends InstancePlugin {
        
        
    }

    export class ColumnPicker extends InstancePlugin {
        
        
    }

    export class ColumnReorder extends InstancePlugin {
        
        
    }

    export class ColumnResize extends InstancePlugin {
        
        
    }

    export class ContextMenu extends InstancePlugin {
        
        
    }

    export class Filter extends InstancePlugin {
        
        // functions
        closeFilterEditor(): void;
        showFilterEditor(column: Column, value: any): void;
    }

    export class FilterBar extends InstancePlugin {
        
        // functions
        hideFilterBar(): void;
        showFilterBar(): void;
        toggleFilterBar(): void;
    }

    export class GridFeatureManager {
        
        // functions
        static registerFeature(featureClass: InstancePlugin, onByDefault?: boolean, forType?: string|Array<string>): void;
    }

    export class Group extends InstancePlugin {
        
        // functions
        collapseAll(): void;
        expandAll(): void;
        toggleCollapse(recordOrId: any, collapse: any): void;
    }

    export class GridGroupSummary extends InstancePlugin {
        
        
    }

    export class QuickFind extends InstancePlugin {
        // properties
        found: Array<object>;
        foundCount: number;
        // functions
        clear(): void;
        gotoFirstHit(): void;
        gotoHit(index: any): void;
        gotoLastHit(): void;
        gotoNextHit(): void;
        gotoPrevHit(): void;
        search(find: any, columnFieldOrId: any): void;
    }

    export class RegionResize extends InstancePlugin {
        
        
    }

    export class Search extends InstancePlugin {
        // properties
        foundCount: number;
        isHitFocused: boolean;
        // functions
        clear(): void;
        gotoFirstHit(): void;
        gotoHit(index: any): void;
        gotoLastHit(): void;
        gotoNextHit(): void;
        gotoPrevHit(): void;
        search(find: string, gotoHit?: boolean, reapply?: boolean): void;
    }

    export class Sort extends InstancePlugin {
        
        
    }

    export class Stripe extends InstancePlugin {
        
        
    }

    export class GridSummary extends InstancePlugin {
        
        
    }

    export class Tree extends InstancePlugin {
        
        // functions
        collapse(idOrRecord: any): Promise<any>;
        collapseAll(): Promise<any>;
        expand(idOrRecord: any): Promise<any>;
        expandAll(): Promise<any>;
        expandOrCollapseAll(collapse?: any): Promise<any>;
        expandTo(idOrRecord: any): Promise<any>;
        toggleCollapse(idOrRecord: any, collapse: any, skipRefresh?: any): Promise<any>;
    }

    export class Row extends Base {
        // properties
        bottom: number;
        cells: Array<HTMLElement>;
        dataIndex: number;
        elements: Array<HTMLElement>;
        height: number;
        id: string|number;
        index: number;
        isFirst: boolean;
        offsetHeight: number;
        top: number;
        // functions
        constructor(rowManager: any, index: any);
        addCls(cls: string): void;
        eachCell(fn: Function): void;
        eachElement(fn: Function): void;
        getCell(columnId: string|number): HTMLElement;
        getCells(region: string): Array<HTMLElement>;
        getElement(region: string): HTMLElement;
        removeCls(cls: string): void;
    }

    export class Grid extends Widget implements Events, Pluggable, State, GridElementEvents, GridFeatures, GridResponsive, GridSelection, GridState, GridSubGrids {
        // properties
        bodyHeight: number;
        data: Array<object>;
        features: object;
        headerHeight: number;
        plugins: object;
        readOnly: boolean;
        responsiveLevel: string;
        selectedCell: object;
        selectedCellCSSSelector: string;
        selectedRecord: Model;
        selectedRecords: Array<Model>|Array<number>;
        showDirty: any;
        state: object;
        store: Store|object;
        // functions
        addListener(config: object, thisObj?: object, prio?: number): Function;
        addPlugins(plugins: any): void;
        deselectAll(): void;
        deselectCell(cellSelector: object): object;
        deselectRow(recordOrId: Model|string|number): void;
        getCell(cellContext: object): HTMLElement;
        getColumnFromElement(element: HTMLElement): Column;
        getHeaderElement(columnId: string|number|Column): HTMLElement;
        getPlugin(pluginClassOrName: any): object;
        getRecordFromElement(element: HTMLElement): Model;
        getSubGrid(region: string): SubGrid;
        getSubGridFromColumn(column: string|Column): SubGrid;
        hasFeature(name: string): boolean;
        hasListener(eventName: string): boolean;
        hasPlugin(pluginClassOrName: any): boolean;
        isSelected(cellSelectorOrId: object|string|number|Model): boolean;
        on(config: any, thisObj: any): void;
        refreshRows(): void;
        relayAll(through: Events, prefix: string, transformCase?: boolean): void;
        removeAllListeners(): void;
        removeListener(config: object, thisObj: object): void;
        render(): void;
        renderContents(): void;
        renderRows(): void;
        restoreScroll(state: any): void;
        resumeEvents(): void;
        scrollCellIntoView(cellContext: object): void;
        scrollColumnIntoView(column: Column|string): void;
        scrollRowIntoView(recordOrId: Model|string|number, options?: object): Promise<any>;
        scrollToBottom(): void;
        scrollToTop(): void;
        selectCell(cellSelector: object, scrollIntoView?: boolean, addToSelection?: boolean, silent?: boolean): object;
        selectRange(fromId: string|number, toId: string|number): void;
        selectRow(recordOrId: any, scrollIntoView?: boolean, addToSelection?: boolean): void;
        spliceSelectedRecords(index: number, toRemove: Array<object>|number, toAdd: Array<object>|object): void;
        storeScroll(): object;
        suspendEvents(queue?: boolean): void;
        trigger(eventName: string, param: object): boolean;
        un(config: any, thisObj: any): void;
    }

    export class SubGrid extends Widget {
        // properties
        collapsed: boolean;
        rowElements: Array<HTMLElement>;
        viewRectangle: Rectangle;
        width: number;
        // functions
        collapse(): Promise<any>;
        expand(): Promise<any>;
        scrollColumnIntoView(column: Column|string): void;
    }

    export class TreeGrid extends Grid {
        // properties
        store: Store|object;
        // functions
        collapse(idOrRecord: any): void;
        collapseAll(): void;
        expand(idOrRecord: any): void;
        expandAll(): void;
        expandTo(idOrRecord: any): void;
    }

    export class GridElementEvents {
        
        
    }

    export class GridFeatures {
        // properties
        features: object;
        // functions
        hasFeature(name: string): boolean;
    }

    export class GridNavigation {
        // properties
        cellCSSSelector: string;
        focusedCell: object;
        isActionableLocation: boolean;
        // functions
        focusCell(cellSelector: object, options: object): object;
        isFocused(cellSelector: object|string|number): boolean;
        navigateDown(event?: Event): object;
        navigateLeft(event?: Event): object;
        navigateRight(event?: Event): object;
        navigateUp(event?: Event): object;
    }

    export class GridResponsive {
        // properties
        responsiveLevel: string;
        
    }

    export class GridSelection {
        // properties
        selectedCell: object;
        selectedCellCSSSelector: string;
        selectedRecord: Model;
        selectedRecords: Array<Model>|Array<number>;
        // functions
        deselectAll(): void;
        deselectCell(cellSelector: object): object;
        deselectRow(recordOrId: Model|string|number): void;
        isSelected(cellSelectorOrId: object|string|number|Model): boolean;
        selectCell(cellSelector: object, scrollIntoView?: boolean, addToSelection?: boolean, silent?: boolean): object;
        selectRange(fromId: string|number, toId: string|number): void;
        selectRow(recordOrId: any, scrollIntoView?: boolean, addToSelection?: boolean): void;
        spliceSelectedRecords(index: number, toRemove: Array<object>|number, toAdd: Array<object>|object): void;
    }

    export class GridState {
        
        
    }

    export class GridSubGrids {
        
        // functions
        getSubGrid(region: string): SubGrid;
        getSubGridFromColumn(column: string|Column): SubGrid;
    }

    export class ResourceInfoColumn extends Column {
        
        
    }

    export class TimeAxisColumn extends Column {
        
        // functions
        refreshHeader(): void;
    }

    export class AbstractCrudManager {
        // properties
        isLoading: boolean;
        revision: number;
        stores: Array<object>;
        syncApplySequence: Array<object>;
        // functions
        addStore(store: Store|string|object|Array<Store>|Array<string>|Array<object>, position?: number, fromStore?: string|Store|object): void;
        addStoreToApplySequence(store: Store|object|Array<Store>|Array<object>, position?: number, fromStore?: string|Store|object): void;
        cancelRequest(request: object): void;
        commit(): void;
        decode(response: string): object;
        doDestroy(): void;
        encode(request: object): string;
        getStore(storeId: string): Store;
        getStoreDescriptor(storeId: string|Store): object;
        hasChanges(storeId?: string|Store): boolean;
        load(options: object): Promise<any>;
        reject(): void;
        removeStore(store: object|string|Store): void;
        removeStoreFromApplySequence(store: object|string|Store): void;
        sendRequest(request: object): object;
        sync(): Promise<any>;
    }

    export class JsonEncoder {
        
        // functions
        decode(responseText: string): object;
        encode(request: object): string;
    }

    export class AjaxTransport {
        
        // functions
        cancelRequest(request: object): void;
        sendRequest(request: object): object;
    }

    export class SchedulerTag {
        
        
    }

    export class AssignmentStore extends Store {
        // properties
        eventStore: any;
        // functions
        assignEventToResource(event: TimeSpan|any, resource: ResourceModel|Array<ResourceModel>): Array<AssignmentModel>;
        getAssignmentForEventAndResource(event: EventModel|string|number, resource: ResourceModel|string|number): AssignmentModel;
        getAssignmentsForEvent(event: TimeSpan): Array<AssignmentModel>;
        getAssignmentsForResource(event: ResourceModel|object): Array<TimeSpan>;
        getEventsForResource(resource: ResourceModel|any): Array<TimeSpan>;
        getResourcesForEvent(event: EventModel): Array<ResourceModel>;
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        mapAssignmentsForEvent(event: EventModel, fn?: Function, filterFn?: Function): Array<any>;
        mapAssignmentsForResource(resource: ResourceModel|number|string, fn?: Function, filterFn?: Function): Array<ResourceModel>;
        removeAssignmentsForEvent(event: TimeSpan|object): void;
        removeAssignmentsForResource(resource: ResourceModel|any): void;
        unassignEventFromResource(event: TimeSpan|string|number, resource?: ResourceModel|string|number): AssignmentModel|Array<AssignmentModel>;
    }

    export class CrudManager extends AbstractCrudManager implements JsonEncoder, AjaxTransport {
        // properties
        assignmentStore: AssignmentStore;
        dependencyStore: DependencyStore;
        eventStore: EventStore;
        resourceStore: ResourceStore;
        // functions
        cancelRequest(request: object): void;
        decode(responseText: string): object;
        encode(request: object): string;
        sendRequest(request: object): object;
    }

    export class DependencyStore extends AjaxStore {
        // properties
        eventStore: EventStore;
        // functions
        getDependencyForSourceAndTargetEvents(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getEventDependencies(event: EventModel, flat?: boolean): Array<DependencyModel>;
        getEventPredecessors(event: EventModel, flat?: boolean): Array<DependencyModel>;
        getEventSuccessors(event: EventModel, flat?: boolean): Array<DependencyModel>;
        getEventsLinkingDependency(sourceEvent: EventModel|string, targetEvent: EventModel|string): DependencyModel;
        getHighlightedDependencies(cls: string): Array<DependencyBaseModel>;
        isValidDependency(dependencyOrFromId: DependencyModel|number|string, toId?: number|string, type?: number): boolean;
    }

    export class EventStore extends AjaxStore implements EventStoreMixin {
        // properties
        assignmentStore: AssignmentStore;
        dependencyStore: DependencyStore;
        resourceStore: ResourceStore;
        // functions
        append(record: EventModel): void;
        assignEventToResource(event: EventModel|string|number, resource: ResourceModel|string|number|Array<ResourceModel>|Array<string>|Array<number>): void;
        forEachScheduledEvent(fn: Function, thisObj: object): void;
        getAssignmentsForEvent(event: EventModel|string|number): Array<AssignmentModel>;
        getAssignmentsForResource(resource: ResourceModel|string|number): Array<AssignmentModel>;
        getEventsByStartDate(start: any): Array<EventModel>;
        getEventsForResource(resource: ResourceModel|string|number): Array<EventModel>;
        getEventsInTimeSpan(start: Date, end: Date, allowPartial?: boolean, onlyAssigned?: boolean): Array<EventModel>;
        getResourcesForEvent(event: EventModel|string|number): Array<ResourceModel>;
        getTotalTimeSpan(): object;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel, resource: ResourceModel): boolean;
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        isEventPersistable(event: EventModel): boolean;
        reassignEventFromResourceToResource(event: EventModel, oldResource: ResourceModel|Array<ResourceModel>, newResource: ResourceModel|Array<ResourceModel>): void;
        removeAssignmentsForEvent(event: EventModel|string|number): void;
        removeAssignmentsForResource(resource: ResourceModel|string|number): void;
        unassignEventFromResource(event: EventModel|string|number, resource: ResourceModel|string|number): void;
    }

    export class ResourceStore extends AjaxStore implements ResourceStoreMixin {
        // properties
        eventStore: EventStore;
        
    }

    export class ResourceTimeRangeStore extends AjaxStore {
        
        
    }

    export class EventStoreMixin {
        // properties
        assignmentStore: AssignmentStore;
        dependencyStore: DependencyStore;
        resourceStore: ResourceStore;
        // functions
        assignEventToResource(event: EventModel|string|number, resource: ResourceModel|string|number|Array<ResourceModel>|Array<string>|Array<number>): void;
        forEachScheduledEvent(fn: Function, thisObj: object): void;
        getAssignmentsForEvent(event: EventModel|string|number): Array<AssignmentModel>;
        getAssignmentsForResource(resource: ResourceModel|string|number): Array<AssignmentModel>;
        getEventsByStartDate(start: any): Array<EventModel>;
        getEventsForResource(resource: ResourceModel|string|number): Array<EventModel>;
        getEventsInTimeSpan(start: Date, end: Date, allowPartial?: boolean, onlyAssigned?: boolean): Array<EventModel>;
        getResourcesForEvent(event: EventModel|string|number): Array<ResourceModel>;
        getTotalTimeSpan(): object;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel, resource: ResourceModel): boolean;
        isEventAssignedToResource(event: EventModel|string|number, resource: ResourceModel|string|number): boolean;
        isEventPersistable(event: EventModel): boolean;
        reassignEventFromResourceToResource(event: EventModel, oldResource: ResourceModel|Array<ResourceModel>, newResource: ResourceModel|Array<ResourceModel>): void;
        removeAssignmentsForEvent(event: EventModel|string|number): void;
        removeAssignmentsForResource(resource: ResourceModel|string|number): void;
        unassignEventFromResource(event: EventModel|string|number, resource: ResourceModel|string|number): void;
    }

    export class ResourceStoreMixin {
        // properties
        eventStore: EventStore;
        
    }

    export class ColumnLines extends InstancePlugin {
        
        
    }

    export class Dependencies extends DependenciesBase implements DependencyCreation {
        
        // functions
        abort(): void;
        drawForEvent(): void;
        hideTerminals(eventElement: HTMLElement): void;
        showTerminals(timeSpanRecord: TimeSpan, element: HTMLElement): void;
    }

    export class EventContextMenu extends InstancePlugin {
        
        // functions
        onElementContextMenu(event: any): void;
    }

    export class EventDrag extends DragBase {
        
        // functions
        getRelatedRecords(eventRecord: EventModel): Array<EventModel>;
    }

    export class EventDragCreate extends DragCreateBase {
        
        
    }

    export class EventEdit extends EditBase {
        
        // functions
        editEvent(eventRecord: EventModel, resourceRecord: ResourceModel, element: HTMLElement): void;
    }

    export class EventFilter extends InstancePlugin {
        
        
    }

    export class EventResize extends ResizeBase {
        
        
    }

    export class EventTooltip extends TooltipBase {
        
        
    }

    export class GroupSummary extends GridGroupSummary {
        
        
    }

    export class HeaderContextMenu extends InstancePlugin {
        
        
    }

    export class Labels extends InstancePlugin {
        
        
    }

    export class NonWorkingTime extends TimeRanges {
        
        
    }

    export class Pan extends InstancePlugin {
        
        
    }

    export class ResourceTimeRanges extends InstancePlugin {
        
        
    }

    export class ScheduleContextMenu extends InstancePlugin {
        
        
    }

    export class ScheduleTooltip extends InstancePlugin {
        
        // functions
        getHoverTipHtml(): void;
        getText(date: Date, event: Event): string;
    }

    export class Summary extends GridSummary {
        
        
    }

    export class TimeRanges extends InstancePlugin {
        // properties
        disabled: boolean;
        showCurrentTimeLine: boolean;
        store: Store;
        // functions
        getTipHtml(): void;
    }

    export class DependenciesBase {
        
        // functions
        draw(): void;
        drawDependency(dependency: DependencyModel): void;
        getConnectorEndSide(timeSpanRecord: TimeSpan): string;
        getConnectorStartSide(timeSpanRecord: TimeSpan): string;
        releaseDependency(dependency: DependencyModel): void;
    }

    export class DragBase extends InstancePlugin {
        
        // functions
        getRelatedRecords(record: TimeSpan): Array<TimeSpan>;
        getTipHtml(): void;
    }

    export class DragCreateBase extends InstancePlugin {
        
        // functions
        addProxy(config: any): void;
        getTipHtml(): any;
        initResizer(event: any, data: any): void;
        initTooltip(): void;
        onElementContextMenu(): boolean;
    }

    export class EditBase extends InstancePlugin {
        
        // functions
        onAfterSave(eventRecord: EventModel): void;
        onBeforeSave(eventRecord: EventModel): void;
    }

    export class ResizeBase extends InstancePlugin {
        
        
    }

    export class TooltipBase extends InstancePlugin {
        // properties
        tooltip: Tooltip;
        
    }

    export class DependencyCreation {
        
        // functions
        abort(): void;
        hideTerminals(eventElement: HTMLElement): void;
        showTerminals(timeSpanRecord: TimeSpan, element: HTMLElement): void;
    }

    export class AssignmentModel extends Model {
        // properties
        assignmentStore: AssignmentStore;
        event: EventModel;
        eventName: string;
        eventStore: EventStore;
        isPersistable: boolean;
        resource: ResourceModel;
        resourceName: string;
        resourceStore: ResourceStore;
        // functions
        getResource(): ResourceModel;
    }

    export class DependencyBaseModel extends Model {
        // properties
        static Type: object;
        fullLag: object;
        isPersistable: boolean;
        sourceEvent: EventModel;
        targetEvent: EventModel;
        // functions
        getSourceEvent(): EventModel;
        getTargetEvent(): EventModel;
        highlight(cls: string): void;
        isHighlightedWith(cls: string): boolean;
        setLag(lag: number|string|object, lagUnit?: string): void;
        unhighlight(cls: string): void;
    }

    export class DependencyModel extends DependencyBaseModel {
        
        
    }

    export class EventModel extends TimeSpan {
        // properties
        assignmentStore: AssignmentStore;
        assignments: Array<AssignmentModel>;
        eventStore: EventStore;
        isDraggable: boolean;
        isEvent: any;
        isPersistable: boolean;
        isResizable: any;
        resourceStore: ResourceStore;
        resources: Array<ResourceModel>;
        // functions
        assign(resource: ResourceModel|string|number): void;
        getResource(resourceId: string): ResourceModel;
        isAssignedTo(resource: ResourceModel|string|number): boolean;
        reassign(oldResourceId: ResourceModel|string|number, newResourceId: ResourceModel|string|number): void;
        unassign(resource?: ResourceModel|string|number|Array<any>): void;
    }

    export class ResourceModel extends GridRowModel {
        // properties
        assignmentStore: AssignmentStore;
        assignments: Array<AssignmentModel>;
        eventStore: EventStore;
        events: Array<EventModel>;
        isPersistable: boolean;
        resourceStore: ResourceStore;
        // functions
        getEvents(eventStore: EventStore): Array<TimeSpan>;
        isAbove(otherResource: ResourceModel): boolean;
        unassignAll(): void;
    }

    export class ResourceTimeRangeModel extends TimeSpan {
        
        
    }

    export class TimeSpan extends Model {
        // properties
        dates: Array<Date>;
        fullDuration: any;
        isScheduled: boolean;
        // functions
        forEachDate(func: Function, thisObj: object): void;
        setDuration(duration: number, durationUnit: string): void;
        setEndDate(date: Date, keepDuration?: boolean): void;
        setStartDate(date: Date, keepDuration?: boolean): void;
        setStartEndDate(start: Date, end: Date): void;
        shift(unit: string, amount: number): void;
    }

    export class PresetManager {
        
        // functions
        static deletePreset(name: string): void;
        static getPreset(preset: string|object): object;
        static normalizePreset(presetOrName: string|object): ViewPreset;
        static registerPreset(name: string, config: object): void;
    }

    export class ViewPreset {
        
        
    }

    export class ViewPresetHeaderRow {
        
        
    }

    export class Scheduler extends TimelineBase implements EventNavigation, EventSelection, SchedulerDom, SchedulerDomEvents, SchedulerEventRendering, SchedulerRegions, SchedulerScroll, SchedulerState, SchedulerStores, TimelineDateMapper, TimelineDomEvents, TimelineEventRendering, TimelineScroll, TimelineViewPresets, TimelineZoomable {
        // properties
        static eventColors: string;
        static eventStyles: string;
        assignmentStore: AssignmentStore;
        assignments: Array<AssignmentModel>|Array<object>;
        barMargin: number;
        crudManager: CrudManager;
        dependencyStore: DependencyStore;
        displayDateFormat: string;
        eventLayout: string;
        eventStore: EventStore;
        events: Array<EventModel>|Array<object>;
        fillTicks: string;
        maxZoomLevel: number;
        milestoneAlign: any;
        minZoomLevel: number;
        resourceStore: ResourceStore;
        resources: Array<ResourceModel>|Array<object>;
        scrollLeft: number;
        scrollTop: number;
        selectedEvents: Array<EventModel>|Array<AssignmentModel>;
        snap: boolean;
        tickWidth: number;
        timeResolution: object;
        viewPreset: ViewPreset|string;
        viewportCenterDate: Date;
        zoomLevel: number;
        // functions
        applyStartEndParameters(): void;
        clearEventSelection(): void;
        deselectEvent(eventRecord: EventModel, preserveSelection?: boolean): void;
        getCoordinateFromDate(date: Date|number, local?: boolean): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: string, local?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: string): Date;
        getDateFromX(x: number, roundingMethod: string, local?: boolean): Date;
        getDateFromXY(xy: Array<any>, roundingMethod: string, local?: boolean): Date;
        getElementFromAssignmentRecord(assignmentRecord: AssignmentModel): HTMLElement;
        getElementFromEventRecord(eventRecord: EventModel, resourceRecord: ResourceModel): HTMLElement;
        getElementsFromEventRecord(eventRecord: EventModel, resourceRecord?: ResourceModel): Array<HTMLElement>;
        getEventRecordFromDomId(id: string): EventModel;
        getMilestoneLabelWidth(eventRecord: EventModel): number;
        getResourceEventBox(eventRecord: EventModel, resourceRecord: ResourceModel, includeOutside?: boolean): any;
        getResourceRecordFromDomId(id: string): ResourceModel;
        getResourceRegion(resourceRecord: ResourceModel, startDate: Date, endDate: Date): object;
        getScheduleRegion(resourceRecord: ResourceModel, eventRecord: EventModel): object;
        getStartEndDatesFromRectangle(rect: Rectangle, roundingMethod: string): object;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
        isDateRangeAvailable(start: Date, end: Date, excludeEvent: EventModel, resource: ResourceModel): boolean;
        onAssignmentFilter(): void;
        onEventDataGenerated(eventData: object): void;
        repaintEventsForResource(resourceRecord: ResourceModel): void;
        resolveAssignmentRecord(element: HTMLElement): AssignmentModel;
        resolveEventRecord(element: HTMLElement): EventModel;
        resolveResourceRecord(element: HTMLElement): ResourceModel;
        scrollEventIntoView(eventRec: EventModel, options?: object): Promise<any>;
        scrollHorizontallyTo(coordinate: any, animate?: any): void;
        scrollResourceEventIntoView(resourceRec: ResourceModel, eventRec: EventModel, index: number, options?: object): Promise<any>;
        scrollTo(x: any, animate: any): void;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: any, animate?: any): void;
        selectEvent(eventRecord: EventModel|AssignmentModel, preserveSelection?: boolean): void;
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit: string): void;
        shiftNext(amount: number): void;
        shiftPrevious(amount: number): void;
        zoomIn(levels?: number): number;
        zoomInFull(): number;
        zoomOut(levels?: number): number;
        zoomOutFull(): number;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
    }

    export class TimelineBase extends Grid implements TimelineDateMapper, TimelineDomEvents, TimelineEventRendering, TimelineScroll, TimelineViewPresets, TimelineZoomable {
        // properties
        static eventColors: string;
        static eventStyles: string;
        barMargin: number;
        displayDateFormat: string;
        endDate: Date;
        maxZoomLevel: number;
        minZoomLevel: number;
        scrollLeft: number;
        scrollTop: number;
        snap: boolean;
        startDate: Date;
        tickWidth: number;
        timeResolution: object;
        viewPreset: ViewPreset|string;
        viewportCenterDate: Date;
        zoomLevel: number;
        // functions
        getCoordinateFromDate(date: Date|number, local?: boolean): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: string, local?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: string): Date;
        getDateFromX(x: number, roundingMethod: string, local?: boolean): Date;
        getDateFromXY(xy: Array<any>, roundingMethod: string, local?: boolean): Date;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
        refreshWithTransition(): void;
        scrollHorizontallyTo(coordinate: any, animate?: any): void;
        scrollTo(x: any, animate: any): void;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: any, animate?: any): void;
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit: string): void;
        shiftNext(amount: number): void;
        shiftPrevious(amount: number): void;
        zoomIn(levels?: number): number;
        zoomInFull(): number;
        zoomOut(levels?: number): number;
        zoomOutFull(): number;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
    }

    export class EventNavigation {
        
        
    }

    export class EventSelection {
        // properties
        selectedEvents: Array<EventModel>|Array<AssignmentModel>;
        // functions
        clearEventSelection(): void;
        deselectEvent(eventRecord: EventModel, preserveSelection?: boolean): void;
        selectEvent(eventRecord: EventModel|AssignmentModel, preserveSelection?: boolean): void;
    }

    export class SchedulerDom {
        
        // functions
        getElementFromAssignmentRecord(assignmentRecord: AssignmentModel): HTMLElement;
        getElementFromEventRecord(eventRecord: EventModel, resourceRecord: ResourceModel): HTMLElement;
        getElementsFromEventRecord(eventRecord: EventModel, resourceRecord?: ResourceModel): Array<HTMLElement>;
        getEventRecordFromDomId(id: string): EventModel;
        getMilestoneLabelWidth(eventRecord: EventModel): number;
        getResourceRecordFromDomId(id: string): ResourceModel;
        resolveAssignmentRecord(element: HTMLElement): AssignmentModel;
        resolveEventRecord(element: HTMLElement): EventModel;
        resolveResourceRecord(element: HTMLElement): ResourceModel;
    }

    export class SchedulerDomEvents {
        
        
    }

    export class SchedulerEventRendering {
        // properties
        eventLayout: string;
        fillTicks: string;
        // functions
        onEventDataGenerated(eventData: object): void;
        repaintEventsForResource(resourceRecord: ResourceModel): void;
    }

    export class SchedulerRegions {
        
        // functions
        getResourceEventBox(eventRecord: EventModel, resourceRecord: ResourceModel, includeOutside?: boolean): any;
        getResourceRegion(resourceRecord: ResourceModel, startDate: Date, endDate: Date): object;
        getScheduleRegion(resourceRecord: ResourceModel, eventRecord: EventModel): object;
        getStartEndDatesFromRectangle(rect: Rectangle, roundingMethod: string): object;
    }

    export class SchedulerScroll {
        
        // functions
        scrollEventIntoView(eventRec: EventModel, options?: object): Promise<any>;
        scrollResourceEventIntoView(resourceRec: ResourceModel, eventRec: EventModel, index: number, options?: object): Promise<any>;
    }

    export class SchedulerState {
        
        
    }

    export class SchedulerStores {
        // properties
        assignmentStore: AssignmentStore;
        assignments: Array<AssignmentModel>|Array<object>;
        crudManager: CrudManager;
        dependencyStore: DependencyStore;
        eventStore: EventStore;
        events: Array<EventModel>|Array<object>;
        resourceStore: ResourceStore;
        resources: Array<ResourceModel>|Array<object>;
        // functions
        applyStartEndParameters(): void;
        onAssignmentFilter(): void;
    }

    export class TimelineDateMapper {
        // properties
        displayDateFormat: string;
        snap: boolean;
        timeResolution: object;
        viewportCenterDate: Date;
        // functions
        getCoordinateFromDate(date: Date|number, local?: boolean): number;
        getDateFromCoordinate(coordinate: number, roundingMethod?: string, local?: boolean): Date;
        getDateFromDomEvent(e: Event, roundingMethod?: string): Date;
        getDateFromX(x: number, roundingMethod: string, local?: boolean): Date;
        getDateFromXY(xy: Array<any>, roundingMethod: string, local?: boolean): Date;
        getTimeSpanDistance(startDate: Date, endDate: Date): number;
    }

    export class TimelineDomEvents {
        
        
    }

    export class TimelineEventRendering {
        // properties
        static eventColors: string;
        static eventStyles: string;
        barMargin: number;
        tickWidth: number;
        
    }

    export class TimelineScroll {
        // properties
        scrollLeft: number;
        scrollTop: number;
        // functions
        scrollHorizontallyTo(coordinate: any, animate?: any): void;
        scrollTo(x: any, animate: any): void;
        scrollToDate(date: Date, options?: object): Promise<any>;
        scrollToNow(options?: object): Promise<any>;
        scrollVerticallyTo(y: any, animate?: any): void;
    }

    export class TimelineViewPresets {
        // properties
        viewPreset: ViewPreset|string;
        
    }

    export class TimelineZoomable {
        // properties
        maxZoomLevel: number;
        minZoomLevel: number;
        zoomLevel: number;
        // functions
        setTimeSpan(startDate: Date, endDate: Date): void;
        shift(amount: number, unit: string): void;
        shiftNext(amount: number): void;
        shiftPrevious(amount: number): void;
        zoomIn(levels?: number): number;
        zoomInFull(): number;
        zoomOut(levels?: number): number;
        zoomOutFull(): number;
        zoomTo(config: object|string|number): void;
        zoomToFit(options?: object): void;
    }

}