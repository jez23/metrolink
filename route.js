function Route () {
this._stations = []
}

Route.prototype = {
addStation: function(station){
    this._stations.push(station)
    return
},
getStations: function(){
    return this._stations
},

getStartingStation: function() {
    return this._stations[0]
},
getTerminatingStation: function(){
    return this._stations[this._stations.length-1]
},
getStartingStation: function (){
    return this._stations[0]


}
}

