# FitnessCenterBackendApi.SportTypeApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSportType**](SportTypeApi.md#deleteSportType) | **DELETE** /sportTypes/{id} | 
[**getSportType**](SportTypeApi.md#getSportType) | **GET** /sportTypes/{id} | 
[**getSportTypes**](SportTypeApi.md#getSportTypes) | **GET** /sportTypes | 
[**putSportType**](SportTypeApi.md#putSportType) | **PUT** /sportTypes/{id} | 
[**registerSportType**](SportTypeApi.md#registerSportType) | **POST** /sportTypes | 



## deleteSportType

> deleteSportType(id)



Delete sport type by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.SportTypeApi();
let id = 1; // Number | ID of the sport type to delete
apiInstance.deleteSportType(id, (error, data, response) => {
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
 **id** | **Number**| ID of the sport type to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSportType

> SportType getSportType(id)



Get sport type by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.SportTypeApi();
let id = 1; // Number | ID of the sport type to retrieve
apiInstance.getSportType(id, (error, data, response) => {
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
 **id** | **Number**| ID of the sport type to retrieve | 

### Return type

[**SportType**](SportType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSportTypes

> [SportType] getSportTypes()



Get all sport types

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.SportTypeApi();
apiInstance.getSportTypes((error, data, response) => {
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

[**[SportType]**](SportType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putSportType

> SportType putSportType(sportType, id)



Put sport type by id

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.SportTypeApi();
let sportType = new FitnessCenterBackendApi.SportType(); // SportType | 
let id = 1; // Number | ID of the sport type to put
apiInstance.putSportType(sportType, id, (error, data, response) => {
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
 **sportType** | [**SportType**](SportType.md)|  | 
 **id** | **Number**| ID of the sport type to put | 

### Return type

[**SportType**](SportType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registerSportType

> SportType registerSportType(sportType)



Register new sport type

### Example

```javascript
import FitnessCenterBackendApi from 'fitness_center_backend_api';

let apiInstance = new FitnessCenterBackendApi.SportTypeApi();
let sportType = new FitnessCenterBackendApi.SportType(); // SportType | 
apiInstance.registerSportType(sportType, (error, data, response) => {
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
 **sportType** | [**SportType**](SportType.md)|  | 

### Return type

[**SportType**](SportType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

