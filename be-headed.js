import { BeOneAndOnly, virtualProps, actions } from 'be-one-and-only/be-one-and-only.js';
import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeHeaded extends BeOneAndOnly {
    selectTarget(pp) {
        return document.head;
    }
}
const tagName = 'be-headed';
const ifWantsToBe = 'headed';
const upgrade = 'template';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            forceVisible: [upgrade],
            virtualProps,
            primaryProp: 'id',
        },
        actions
    },
    complexPropDefaults: {
        controller: BeHeaded
    }
});
register(ifWantsToBe, upgrade, tagName);
