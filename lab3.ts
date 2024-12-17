//Задание 1
console.log("Задание 1: " + "\n");

interface Owner {
    name: string;
    surname: string;
    patronymic: string;
    birthDate: string;
    documentType: DocumentTypes;
    documentSeries: number;
    documentNumber: number;

    displayOwnerInfo(): void;
}

enum DocumentTypes {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    OSAGO = "ОСАГО",
}

interface Vehicle {
    mark: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    displayVehicleWithoutOwner(): void;
}

class VehicleClass implements Vehicle {
    private _mark: string;
    private _model: string;
    private _yearOfManufacture: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        mark: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get mark(): string { return this._mark; }
    set mark(value: string) { this._mark = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get yearOfManufacture(): number { return this._yearOfManufacture; }
    set yearOfManufacture(value: number) { this._yearOfManufacture = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    displayVehicleWithoutOwner(): void {
        console.log("Информация о транспортном средстве:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
    }

}

class OwnerClass implements Owner {
    private _name: string;
    private _surname: string;
    private _patronymic: string;
    private _birthDate: string;
    private _documentType: DocumentTypes;
    private _documentSeries: number;
    private _documentNumber: number;

    constructor(
        name: string,
        surname: string,
        patronymic: string,
        birthDate: string,
        documentType: DocumentTypes,
        documentSeries: number,
        documentNumber: number
    ) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }


    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value }

    get patronymic(): string { return this._patronymic; }
    set patronymic(value: string) { this._patronymic = value; }

    get birthDate(): string { return this._birthDate; }
    set birthDate(value: string) { this._birthDate = value; }

    get documentType(): DocumentTypes { return this._documentType; }
    set documentType(value: DocumentTypes) { this._documentType = value; }

    get documentSeries(): number { return this._documentSeries; }
    set documentSeries(value: number) { this._documentSeries = value; }

    get documentNumber(): number { return this._documentNumber; }
    set documentNumber(value: number) { this._documentNumber = value; }

    displayOwnerInfo(): void {
        console.log("Информация о владельце:");
        console.log("ФИО: " + this._surname + " " + this._name + " " + this._patronymic);
        console.log("Дата рождения:" + this._birthDate);
        console.log("Тип документа: " + this._documentType);
        console.log("Серия документа: " + this._documentSeries.toString());
        console.log("Номер документа: " + this._documentNumber.toString());
    }
}

const ownerOne = new OwnerClass(
    "Иван",
    "Иванов",
    "Иванович",
    "05.04.2005",
    DocumentTypes.Passport,
    1234,
    567890
);

const vehicle = new VehicleClass(
    "Lada",
    "Samara",
    2002,
    "JT1234567890VIN12",
    "А123ВС77",
    ownerOne
);

ownerOne.displayOwnerInfo();
console.log(" ");
vehicle.displayVehicleWithoutOwner();
console.log(" ");


//Задание 2
console.log("Задание 2: " + "\n");
interface Car extends Vehicle {
    bodyTypes: BodyType;
    carClasses: CarClass;
    displayVehicleWithoutOwner(): void;
}

enum BodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Convertible = "Кабриолет",
}

enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум",
}

interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
    displayVehicleWithoutOwner(): void;
}

class Car implements Car {
    private _mark: string;
    private _model: string;
    private _yearOfManufacture: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(
        mark: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get mark(): string { return this._mark; }
    set mark(value: string) { this._mark = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get yearOfManufacture(): number { return this._yearOfManufacture; }
    set yearOfManufacture(value: number) { this._yearOfManufacture = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }

    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    displayVehicleWithoutOwner(): void {
        console.log("Информация об автомобиле:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
        console.log("Тип кузова: " + this._bodyType);
        console.log("Класс автомобиля: " + this._carClass);
    }
}

class MotorbikeClass implements Motorbike {
    private _mark: string;
    private _model: string;
    private _yearOfManufacture: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isSport: boolean;

    constructor(
        mark: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isSport: boolean
    ) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }

    get mark(): string { return this._mark; }
    set mark(value: string) { this._mark = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get yearOfManufacture(): number { return this._yearOfManufacture; }
    set yearOfManufacture(value: number) { this._yearOfManufacture = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    get frameType(): string { return this._frameType; }
    set frameType(value: string) { this._frameType = value; }

    get isSport(): boolean { return this._isSport; }
    set isSport(value: boolean) { this._isSport = value; }

    displayVehicleWithoutOwner(): void {
        console.log("Информация о мотоцикле:");
        console.log("Марка: " + this._mark);
        console.log("Модель: " + this._model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this._vin);
        console.log("Регистрационный номер: " + this._registrationNumber);
        console.log("Тип рамы: " + this._frameType);
        console.log("Для спорта: " + this._isSport);
    }
}

const ownerTwo = new OwnerClass(
    "Алексей",
    "Петров",
    "Игоревич",
    "10.10.1990",
    DocumentTypes.Passport,
    5678,
    123456
);
const car = new Car(
    "BMW",
    "X5",
    2021,
    "WBA1234567890VIN1",
    "М456ОР77",
    ownerTwo,
    BodyType.SUV,
    CarClass.Premium
);

const motorbike = new MotorbikeClass(
    "Yamaha",
    "YZF-R1",
    2022,
    "JYARN123456789012",
    "М123ВС77",
    ownerTwo,
    "Алюминиевая",
    true
);

car.displayVehicleWithoutOwner();
console.log("");
motorbike.displayVehicleWithoutOwner();
console.log("");

//Задание 3
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

class VehicleStorageClass<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor(vehicles: T[]) {
        this._creationDate = new Date();
        this._vehicles = vehicles;   
    }

    get creationDate(): Date { return this._creationDate; }
    set creationDate(value: Date) { this._creationDate = value; }

    getAllVehicles(): T[] { return this._vehicles; }
    set vehicles(value: T[]) { this._vehicles = value; }  
}