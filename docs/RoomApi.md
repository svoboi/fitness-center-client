# FitnessCenterBackendApi.RoomApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRoom**](RoomApi.md#deleteRoom) | **DELETE** /rooms/{id} | 
[**getRoom**](RoomApi.md#getRoom) | **GET** /rooms/{id} | 
[**getRooms**](RoomApi.md#getRooms) | **GET** /rooms | 
[**putRoom**](RoomApi.md#putRoom) | **PUT** /rooms/{id} | 
[**registerRoom**](RoomApi.md#registerRoom) | **POST** /rooms | 



## deleteRoom

> deleteRoom(id)



Delete room by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.RoomApi();
let id = 1; // Number | ID of the room to delete
apiInstance.deleteRoom(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the room to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRoom

> Room getRoom(id)



Get room by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.RoomApi();
let id = 1; // Number | ID of the room to retrieve
apiInstance.getRoom(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the room to retrieve | 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRooms

> [Room] getRooms()



Get all rooms

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.RoomApi();
apiInstance.getRooms((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Room]**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putRoom

> Room putRoom(room, id)



Put room by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.RoomApi();
let room = new FitnessCenterBackendApi.Room(); // Room | 
let id = 1; // Number | ID of the room to put
apiInstance.putRoom(room, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **room** | [**Room**](Room.md)|  | 
 **id** | **Number**| ID of the room to put | 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerRoom

> Room registerRoom(room)



Register new room

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.RoomApi();
let room = new FitnessCenterBackendApi.Room(); // Room | 
apiInstance.registerRoom(room, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **room** | [**Room**](Room.md)|  | 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

