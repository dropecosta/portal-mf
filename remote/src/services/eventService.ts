const createEventSource = (onMessageCallback: any) => {
    const eventSource = new EventSource("http://localhost:5000/api/events");
  
    eventSource.onmessage = function (event) {
      const newData = JSON.parse(event.data);
      onMessageCallback(newData);
    };
  
    return eventSource;
  };
  
  export default createEventSource;