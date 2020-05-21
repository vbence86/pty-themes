import _ from 'lodash';

/**
 * Returns a little preview block to showcase the given
 * html snippet
 *
 * @param {string} html
 * @returns {string}
 */
export const preiviewHTML = html => `
<div class="col-md-12">
	<p>${html}</p>
	<p style="background-color: #f8f9fa; padding: 1rem">
		<code>${_.escape(html)}</code>
	</p>
</div>
`;
