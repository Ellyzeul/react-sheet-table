function useTableEvent(trigger: Trigger, callback: Callback): void;
function useTableEvent(events: EventCollection): void
function useTableEvent(arg0: Trigger | EventCollection, arg1?: Callback) {
  if(typeof arg0 === 'string' && arg1) return handleSingleEvent(arg0, arg1)
  if(typeof arg0 === 'object') return handleMultipleEvents(arg0)
  
  if(typeof arg0 === 'string' && !arg1) throw 'A callback should be given for useTableEvent...'
  if(typeof arg0 === 'object' && arg1) throw 'When passing an array of events, a callback shouldn\'t be given to useTableEvent...'
}

export default useTableEvent

const handleSingleEvent = (trigger: Trigger, callback: Callback): void => {
  trigger
  callback
}

const handleMultipleEvents = (events: EventCollection) => {
  events
}

type Trigger = 'click'
type Callback = () => void
type EventCollection = Array<{
  trigger: Trigger,
  callback: Callback
}>
