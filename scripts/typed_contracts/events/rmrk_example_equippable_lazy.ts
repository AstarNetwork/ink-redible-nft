import type * as EventTypes from '../event-types/rmrk_example_equippable_lazy';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/rmrk_example_equippable_lazy.json';
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@727-ventures/typechain-types";

export default class EventsClass {
	private __nativeContract : ContractPromise;
	private __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnTransferEvent(callback : (event : EventTypes.Transfer) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Transfer', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Transfer);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Transfer');
	}

	public subscribeOnApprovalEvent(callback : (event : EventTypes.Approval) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('Approval', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.Approval);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'Approval');
	}

	public subscribeOnChildAddedEvent(callback : (event : EventTypes.ChildAdded) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ChildAdded', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ChildAdded);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ChildAdded');
	}

	public subscribeOnChildAcceptedEvent(callback : (event : EventTypes.ChildAccepted) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ChildAccepted', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ChildAccepted);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ChildAccepted');
	}

	public subscribeOnChildRemovedEvent(callback : (event : EventTypes.ChildRemoved) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ChildRemoved', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ChildRemoved);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ChildRemoved');
	}

	public subscribeOnChildRejectedEvent(callback : (event : EventTypes.ChildRejected) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ChildRejected', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ChildRejected);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ChildRejected');
	}

	public subscribeOnAssetSetEvent(callback : (event : EventTypes.AssetSet) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetSet', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetSet);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetSet');
	}

	public subscribeOnAssetAddedToTokenEvent(callback : (event : EventTypes.AssetAddedToToken) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetAddedToToken', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetAddedToToken);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetAddedToToken');
	}

	public subscribeOnAssetAcceptedEvent(callback : (event : EventTypes.AssetAccepted) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetAccepted', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetAccepted);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetAccepted');
	}

	public subscribeOnAssetRejectedEvent(callback : (event : EventTypes.AssetRejected) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetRejected', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetRejected);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetRejected');
	}

	public subscribeOnAssetRemovedEvent(callback : (event : EventTypes.AssetRemoved) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetRemoved', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetRemoved);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetRemoved');
	}

	public subscribeOnAssetPrioritySetEvent(callback : (event : EventTypes.AssetPrioritySet) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetPrioritySet', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetPrioritySet);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetPrioritySet');
	}

	public subscribeOnAssetEquippedEvent(callback : (event : EventTypes.AssetEquipped) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetEquipped', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetEquipped);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetEquipped');
	}

	public subscribeOnAssetUnEquippedEvent(callback : (event : EventTypes.AssetUnEquipped) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('AssetUnEquipped', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.AssetUnEquipped);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'AssetUnEquipped');
	}

	public subscribeOnParentEquippableGroupSetEvent(callback : (event : EventTypes.ParentEquippableGroupSet) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('ParentEquippableGroupSet', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.ParentEquippableGroupSet);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'ParentEquippableGroupSet');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}