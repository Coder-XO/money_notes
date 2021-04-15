// 声明全局自定义TS类型   这样整个src都可以使用此类型

type Tag = {    // 给标签的编辑页面做ID
    id: string;
    name: string;
}

type RecordItem = {     // TS声明对象类型
    tags: string[],
    notes: string,
    type: string,
    amount: number,     //  数据类型
    createdAt?: Date   // 类
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //  联合类型
    save: () => void
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
}

interface window {      //  声明window下挂的属性
    tagList: Tag[],
    createTag: (name: string) => void,
    removeTag: (id: string) => boolean,
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated',
    findTag: (id: string) => Tag | undefined
}