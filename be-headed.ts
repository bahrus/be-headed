import {BeOneAndOnly, virtualProps} from 'be-one-and-only/be-one-and-only.js';
import { PP, VirtualProps, Actions } from './types';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {register} from 'be-hive/register.js';

export class BeHeaded extends BeOneAndOnly{
    override selectTarget(pp: PP) : Node {
        return document.head;
    }
}

const tagName = 'be-headed';
const ifWantsToBe = 'headed';
const upgrade = 'template';


define<PP & BeDecoratedProps<PP, Actions>, Actions>({
    config:{
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            forceVisible: [upgrade],
            virtualProps,
            primaryProp: 'id',
        },
        actions: {
            beBornIfTheOne: 'id'
        }
    },
    complexPropDefaults:{
        controller: BeHeaded
    }
});

register(ifWantsToBe, upgrade, tagName);