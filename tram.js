function Tram (route, startingStation) {
this._route = route
this._currentStation = startingStation

}

Tram.prototype = {
getCurrentStation: function () {
    return this._currentStation
    },


  reset: function() {
        this._currentStation = this._route.getStations()[0]

},





drive: function() {
    var routeStations = this._route.getStations()
    var currentStationIndex = routeStations.indexOf(this._currentStation)
    var nextStationIndex = currentStationIndex + 1

    if (nextStationIndex >= routeStations.length ) {
        return "End of the line!"
    }

    this._currentStation = routeStations[nextStationIndex]

    return "This is the service from "  + routeStations[0].getName() + " to " + routeStations[routeStations.length-1].getName()  + " Now arriving at: " + this._currentStation.getName()
    

  
}
}