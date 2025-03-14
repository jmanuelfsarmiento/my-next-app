import { useState, useEffect, useCallback } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEvenDescription] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventColor, setEventColor] = useState("#2196F3");
  const [selectedSlot, setSelectedSlot] = useState(null);

  

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch("https://6499e50479fbe9bcf8402476.mockapi.io/eventos")
      .then((response) => response.json())
      .then((data) => {
        const fetchedEvents = data.map((event) => ({
          title: event.title,
          description: event.description,
          eventAt: new Date(event.eventAt),
          id: event.id,
          color: event.color || "#2196F3",
        }));
        setEvents(fetchedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  };

  const handleSelectSlot = useCallback(({ start }) => {
    setSelectedSlot({ start, end: start });
    setEventTitle("");
    setEvenDescription("");
    setEventColor("#2196F3");
    setIsCreateModalOpen(true);
  }, []);

  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
    setEventTitle(event.title);
    setEvenDescription(event.description)
    setEventColor(event.color);
    setIsEditModalOpen(true);
  }, []);

  const handleSaveEvent = () => {
    const newEvent = {
      title: eventTitle,
      description: eventDescription,
      eventAt: selectedSlot.start.toISOString(),
      id: String(new Date().getTime()),
      color: eventColor,
    };

    fetch("https://6499e50479fbe9bcf8402476.mockapi.io/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then(() => {
        fetchEvents();
        setIsCreateModalOpen(false);
      })
      .catch((error) => console.error("Error creating event:", error));
  };

  const handleUpdateEvent = () => {
    const updatedEvent = {
      ...selectedEvent,
      title: eventTitle,
      description: eventDescription,
      color: eventColor,
    };

    fetch(
      `https://6499e50479fbe9bcf8402476.mockapi.io/eventos/${selectedEvent.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      }
    )
      .then(() => {
        fetchEvents();
        setIsEditModalOpen(false);
      })
      .catch((error) => console.error("Error updating event:", error));
  };

  const handleDeleteEvent = () => {
    if (selectedEvent?.id) {
      fetch(
        `https://6499e50479fbe9bcf8402476.mockapi.io/eventos/${selectedEvent.id}`,
        { method: "DELETE" }
      )
        .then(() => {
          fetchEvents();
          setIsEditModalOpen(false);
        })
        .catch((error) => console.error("Error deleting event:", error));
    }
  };

  return {
    events,
    loading,
    view,
    date,
    setView,
    setDate,
    handleSelectSlot,
    handleSelectEvent,
    isCreateModalOpen,
    setIsCreateModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    eventTitle,
    setEventTitle,
    eventDescription,
    setEvenDescription,
    eventColor,
    setEventColor,
    selectedEvent,
    handleSaveEvent,
    handleUpdateEvent,
    handleDeleteEvent,
  };
};
