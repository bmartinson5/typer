import * as Draft from 'draft-js'

export function createWithPlainText(plainText) {
    const contentState = Draft.ContentState.createFromText(plainText);
    const newEditorState = Draft.EditorState.createWithContent(contentState);
    return newEditorState;
}

export function createWithHTML(initialHtml) {
     const contentBlocks = Draft.convertFromHTML("<div>hello</div>");
     const contentState = Draft.ContentState.createFromBlockArray(contentBlocks);
     const newEditorState = Draft.EditorState.createWithContent(contentState);
     return newEditorState;
}
