//Задание 1
console.log("Задание 1: " + "\n");
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentTypes["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocumentTypes["OSAGO"] = "\u041E\u0421\u0410\u0413\u041E";
})(DocumentTypes || (DocumentTypes = {}));
var VehicleClass = /** @class */ (function () {
    function VehicleClass(mark, model, yearOfManufacture, vin, registrationNumber, owner) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    Object.defineProperty(VehicleClass.prototype, "mark", {
        get: function () { return this._mark; },
        set: function (value) { this._mark = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "yearOfManufacture", {
        get: function () { return this._yearOfManufacture; },
        set: function (value) { this._yearOfManufacture = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClass.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    VehicleClass.prototype.displayVehicleWithoutOwner = function () {
        console.log("Информация о транспортном средстве:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
    };
    return VehicleClass;
}());
var OwnerClass = /** @class */ (function () {
    function OwnerClass(name, surname, patronymic, birthDate, documentType, documentSeries, documentNumber) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerClass.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "surname", {
        get: function () { return this._surname; },
        set: function (value) { this._surname = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "patronymic", {
        get: function () { return this._patronymic; },
        set: function (value) { this._patronymic = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentType", {
        get: function () { return this._documentType; },
        set: function (value) { this._documentType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    OwnerClass.prototype.displayOwnerInfo = function () {
        console.log("Информация о владельце:");
        console.log("ФИО: " + this._surname + " " + this._name + " " + this._patronymic);
        console.log("Дата рождения:" + this._birthDate);
        console.log("Тип документа: " + this._documentType);
        console.log("Серия документа: " + this._documentSeries.toString());
        console.log("Номер документа: " + this._documentNumber.toString());
    };
    return OwnerClass;
}());
var ownerOne = new OwnerClass("Иван", "Иванов", "Иванович", "05.04.2005", DocumentTypes.Passport, 1234, 567890);
var vehicle = new VehicleClass("Lada", "Samara", 2002, "JT1234567890VIN12", "А123ВС77", ownerOne);
ownerOne.displayOwnerInfo();
console.log(" ");
vehicle.displayVehicleWithoutOwner();
console.log(" ");
//Задание 2
console.log("Задание 2: " + "\n");
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["Convertible"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (CarClass = {}));
var Car = /** @class */ (function () {
    function Car(mark, model, yearOfManufacture, vin, registrationNumber, owner, bodyType, carClass) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Object.defineProperty(Car.prototype, "mark", {
        get: function () { return this._mark; },
        set: function (value) { this._mark = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "yearOfManufacture", {
        get: function () { return this._yearOfManufacture; },
        set: function (value) { this._yearOfManufacture = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        set: function (value) { this._bodyType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carClass", {
        get: function () { return this._carClass; },
        set: function (value) { this._carClass = value; },
        enumerable: false,
        configurable: true
    });
    Car.prototype.displayVehicleWithoutOwner = function () {
        console.log("Информация об автомобиле:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
        console.log("Тип кузова: " + this._bodyType);
        console.log("Класс автомобиля: " + this._carClass);
    };
    return Car;
}());
var MotorbikeClass = /** @class */ (function () {
    function MotorbikeClass(mark, model, yearOfManufacture, vin, registrationNumber, owner, frameType, isSport) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }
    Object.defineProperty(MotorbikeClass.prototype, "mark", {
        get: function () { return this._mark; },
        set: function (value) { this._mark = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "yearOfManufacture", {
        get: function () { return this._yearOfManufacture; },
        set: function (value) { this._yearOfManufacture = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "frameType", {
        get: function () { return this._frameType; },
        set: function (value) { this._frameType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeClass.prototype, "isSport", {
        get: function () { return this._isSport; },
        set: function (value) { this._isSport = value; },
        enumerable: false,
        configurable: true
    });
    MotorbikeClass.prototype.displayVehicleWithoutOwner = function () {
        console.log("Информация о мотоцикле:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
        console.log("Тип рамы: " + this._frameType);
        console.log("Для спорта: " + this._isSport);
    };
    return MotorbikeClass;
}());
var ownerTwo = new OwnerClass("Алексей", "Петров", "Игоревич", "10.10.1990", DocumentTypes.Passport, 5678, 123456);
var car = new Car("BMW", "X5", 2021, "WBA1234567890VIN1", "М456ОР77", ownerTwo, BodyType.SUV, CarClass.Premium);
var motorbike = new MotorbikeClass("Yamaha", "YZF-R1", 2022, "JYARN123456789012", "М123ВС77", ownerTwo, "Алюминиевая", true);
car.displayVehicleWithoutOwner();
console.log("");
motorbike.displayVehicleWithoutOwner();
console.log("");
var VehicleStorageClass = /** @class */ (function () {
    function VehicleStorageClass(vehicles) {
        this._creationDate = new Date();
        this._vehicles = vehicles;
    }
    Object.defineProperty(VehicleStorageClass.prototype, "creationDate", {
        get: function () { return this._creationDate; },
        set: function (value) { this._creationDate = value; },
        enumerable: false,
        configurable: true
    });
    VehicleStorageClass.prototype.getAllVehicles = function () { return this._vehicles; };
    Object.defineProperty(VehicleStorageClass.prototype, "vehicles", {
        set: function (value) { this._vehicles = value; },
        enumerable: false,
        configurable: true
    });
    return VehicleStorageClass;
}());
