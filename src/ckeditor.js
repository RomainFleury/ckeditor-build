/* eslint-disable no-mixed-spaces-and-tabs */
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/Strikethrough';
import underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Font,
	Alignment,
	Strikethrough,
	underline,
	Mention
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	fontFamily: {
		options: [
			'default',
			' Arial',
			'comic-sans-MS',
			'Courier New',
			'Tahoma',
			'georgia',
			'Verdana',
			'Time new roman',
			'Trebuchet MS',
			'Lucid Sans Unicode',
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		]
	},
	// eslint-disable-next-line max-len
	toolbar: [ 'heading', '|', 'bold', 'italic', 'strikethrough', 'underline', '|', 'numberedList', 'bulletedList', '|', 'fontSize', 'fontColor', 'fontBackgroundColor', 'fontFamily', '|', 'link', 'insertTable', 'Alignment' ],
	heading:
        {
        	options: [
        		{
        			model: 'paragraph',
        			title: 'Paragraph',
        			class: 'ck-heading_paragraph'
        		},
        		{
        			model: 'heading1',
        			view: 'h1',
        			title: 'Heading 1',
        			class: 'ck-heading_heading1'
        		},
        		{
        			model: 'heading2',
        			view: 'h2',
        			title: 'Heading 2',
        			class: 'ck-heading_heading2'
        		},
        		{
        			model: 'heading3',
        			view: 'h3',
        			title: 'Heading 3',
        			class: 'ck-heading_heading3'
        		},
        		{
        			model: 'heading4',
        			view: 'h3',
        			title: 'Heading 4',
        			class: 'ck-heading_heading4'
        		},
        		{
        			model: 'heading5',
        			view: 'h4',
        			title: 'Heading 5',
        			class: 'ck-heading_heading5'
        		},
        		{
        			model: 'heading6',
        			view: 'h6',
        			title: 'Heading 6',
        			class: 'ck-heading_heading6'
        		},
        		{
        			model: 'address',
        			view: 'address',
        			title: 'address',
        			class: 'ck-address'
        		},
        		{
        			model: 'div',
        			view: 'div',
        			title: 'normal div',
        			class: 'ck-normal-div'
        		},
        		{
        			model: 'hr',
        			view: 'hr',
        			title: 'line break',
        			class: 'hr'
        		}
        	]
        },
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	}
}
;
