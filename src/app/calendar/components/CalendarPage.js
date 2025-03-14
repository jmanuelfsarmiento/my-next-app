"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Typography } from "@mui/material";
import { useEvents } from "../hooks/useEvents";
import { CalendarWrapper } from "./styled";
import CalendarModal from "./CalendarModal";

moment.locale("es");
const localizer = momentLocalizer(moment);

const messages = {
  week: "Semana",
  work_week: "Semana de trabajo",
  day: "Día",
  month: "Mes",
  previous: "Atrás",
  next: "Después",
  today: "Hoy",
  agenda: "Agenda",
  showMore: (total) => `+${total} más`,
};

const Calendario = () => {
  const {
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
  } = useEvents();

  if (loading) {
    return (
      <CalendarWrapper>
        <Typography>Cargando...</Typography>
      </CalendarWrapper>
    );
  }

  return (
    <CalendarWrapper>
      <Calendar
        messages={messages}
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="eventAt"
        endAccessor="eventAt"
        style={{ width: 800, height: 600, fontFamily: "Roboto, sans-serif" }}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        defaultView={view}
        view={view}
        date={date}
        onView={(view) => setView(view)}
        onNavigate={(date) => setDate(new Date(date))}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        selectable
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
          },
        })}
      />

      <CalendarModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Nuevo evento"
        eventTitle={eventTitle}
        setEventTitle={setEventTitle}
        eventDescription={eventDescription}
        setEventDescription={setEvenDescription}
        eventColor={eventColor}
        setEventColor={setEventColor}
        onSave={handleSaveEvent}
      />

      <CalendarModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Editar evento"
        eventTitle={eventTitle}
        setEventTitle={setEventTitle}
        eventDescription={eventDescription}
        setEventDescription={setEvenDescription}
        eventColor={eventColor}
        setEventColor={setEventColor}
        onSave={handleUpdateEvent}
        onDelete={handleDeleteEvent}
        isEdit={true}
        selectedEvent={selectedEvent}
      />
    </CalendarWrapper>
  );
};

export default Calendario;
