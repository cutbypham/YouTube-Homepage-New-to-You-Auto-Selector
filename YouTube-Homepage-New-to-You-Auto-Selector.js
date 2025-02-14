// ==UserScript==
// @name         YouTube Homepage New to You Auto-Selector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto clicks specified elements on YouTube's home page with delays.
// @author       You
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

// TODO: This function doesn't run when the user clicks the YouTube logo to navigate to the homepage from another YouTube page (e.g., a video or channel page).
// TODO: Add a link to guide users to the extension installation page.

(function() {
    'use strict';

    setTimeout(function() {
        for (let i = 0; i < 1; i++) {
            setTimeout(function() {
                const rightArrowButton = document.querySelector("#chip-container");
                if (rightArrowButton) {
                    rightArrowButton.click();
                }
            }, i * 10);
        }

        setTimeout(function() {
            const chip = document.querySelector("#chips > yt-chip-cloud-chip-renderer:nth-child(21)");
            if (chip) {
                chip.click();
            }
        }, 10);
    }, 400);
})();

