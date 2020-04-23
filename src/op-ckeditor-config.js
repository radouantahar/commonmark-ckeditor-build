import { userMentions } from "./mentions/user-mentions";
import { workPackageMentions } from "./mentions/work-package-mentions";
import {customItemRenderer} from './mentions/mentions-item-renderer';

const customColorPalette = [
    {
        color: 'hsl(4, 90%, 58%)',
        label: 'Red'
    },
    {
        color: 'hsl(340, 82%, 52%)',
        label: 'Pink'
    },
    {
        color: 'hsl(291, 64%, 42%)',
        label: 'Purple'
    },
    {
        color: 'hsl(262, 52%, 47%)',
        label: 'Deep Purple'
    },
    {
        color: 'hsl(231, 48%, 48%)',
        label: 'Indigo'
    },
    {
        color: 'hsl(207, 90%, 54%)',
        label: 'Blue'
    },

    // ...
];

export const defaultConfig = {
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' }
		]
	},
	toolbar: {
		// Will be defined by each build
	},
	OPMacroEmbeddedTable: {
		toolbar: [
			'opEditEmbeddedTableQuery',
		]
	},
	OPMacroWpButton: {
		toolbar: [
			'opEditWpMacroButton',
		]
	},
	OPWikiIncludePage: {
		toolbar: [
			'opEditWikiIncludeMacroButton',
		]
	},
	OPCodeBlock: {
		toolbar: [
			'opEditCodeBlock',
		]
	},
	OPChildPages: {
		toolbar: [
			'opEditChildPagesMacroButton',
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties' ],
		// Configuration of the TableProperties plugin.
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		},
		// Configuration of the TableCellProperties plugin.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		}
	},

	mention: {
		feeds: [
			{
				marker: '@',
				feed: userMentions,
				itemRenderer: customItemRenderer,
				minimumCharacters: 0
			},
			{
				marker: '#',
				feed: workPackageMentions,
				itemRenderer: customItemRenderer,
				minimumCharacters: 1
			},
		]
	},

	language: 'en'
};
