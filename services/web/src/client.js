import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

import { initFeatureToggles } from "./feature-toggles";
initFeatureToggles();