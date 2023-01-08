import {
    EndUserProps as BeOneAndOnlyEndUserProps,
    VirtualProps as BeOneAndOnlyVirtualProps,
    Actions as BeOneAndOnlyActions
} from 'be-one-and-only/types';

export interface EndUserProps extends BeOneAndOnlyEndUserProps{
    targetSelector: string,
}

export interface VirtualProps extends EndUserProps, BeOneAndOnlyVirtualProps{}

export type Proxy = HTMLTemplateElement & VirtualProps;


export interface ProxyProps extends VirtualProps{
    proxy: Proxy;
}

export type PP = ProxyProps;

export interface Actions extends BeOneAndOnlyActions{}