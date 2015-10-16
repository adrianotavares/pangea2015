angular.module('starter.services', [])

.factory('HomeContent', function() {

  var content = {
    viewtitle: "Pangea",
    name: "Pangea App",
    title: "Pangea convida: Arquitetura para Transformação Digital",
    description: "O Pangea (pangeanet.org) quer turbinar a forte comunidade de arquitetos e desenvolvedores de Campinas! Para isso, queremos te chamar para ser nosso convidado:",
    date: "24 de Outubro - Sábado",
    hour: "das 8 às 17 horas",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non metus urna. Aenean bibendum felis felis, ac pulvinar odio tristique nec. Donec imperdiet nibh nec ante finibus ultrices. Etiam lobortis, lorem ut semper suscipit, ipsum nulla lacinia tellus, ac vestibulum libero sem eget elit. Aliquam erat volutpat.",
    finish: "Esperamos vocês! :-)"

  };

  return {
    all: function(){
      return content;
    },
    get: function(key) {
      return content[key];
    }
  };
})

.factory('CalendarContent', function() {
  var content = {
    viewtitle: "Agenda",
    calendars: [{
      id: 0,
      name: "Registro",
      description: "Registro inicial dos participantes",
      hour: "08:00 às 08:30",
      linked: false
    }, {
      id: 1,
      name: "Abertura",
      description: "Abertura do Evento com Adriano Tavares",
      hour: "08:30 às 09:00",
      linked: false
    }, {
      id: 2,
      name: "Transformação Digital: Sua arquitetura está preparada?",
      description: "Primeira palestra do evento",
      hour: "10:00 às 10:45",
      linked: false
    }, {
      id: 3,
      name: "Arquitetura microservices: vantagens e desvantagens",
      keynoter: {
        name: "Fábio Rosato",
        position: "Professional Service Manager",
        company: "Sensedia"
      },
      description: "",
      hour: "10:00 às 10:45",
      linked: true
    }]
  };

  return {
    all: function() {
      return content;
    },
    getCalendar: function(calendarId) {
      for (var i = 0; i < content.calendars.length; i++) {
        if (content.calendars[i].id === parseInt(calendarId)) {
          return content.calendars[i];
        }
      }
      return null;
    }
  };
})