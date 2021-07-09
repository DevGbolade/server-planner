# Compute Sever Capacity Api

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Supporting packages

#### Linter

- [ESLint](https://eslint.org/)

#### Compiler

- [Babel](https://babeljs.io/)

## Application Features

- Compute Server Capacity for hosting virtualmachines

## Getting Started

### Installation

- Install [NodeJS](https://nodejs.org/) on your computer
- Clone this repository using `https://github.com/devgbolade/server-planner.git`
- Use the `.env.example` file to setup your environmental variables and rename the file to `.env`
- Run `npm install` to install all dependencies
- Run `npm run build` to build the project
- Run `npm run start:dev` to start the server
- Navigate to [localhost:3000](http://localhost:4500/) in browser to access the application

#### Test Tools

- [Jest](https://jestjs.io/) - JavaScript Test Framework for API Tests (Backend)
- [Supertest](https://www.npmjs.com/package/supertest) - Super-agent driven
  library for testing node.js HTTP servers

  ## Running Tests

Dependencies to enable them work are included in the `package.json` file. To run unit tests, you can do the following:

```bash
# Enter the project's directory
$ cd server-planner/

# To run the available unit tests
$ npm run test
```

## API endpoints

| Method |             Endpoint              |                               Description                                | Access |
| :----- | :-------------------------------: | :----------------------------------------------------------------------: | :----: |
| `POST` | `/api/v1/compute-server-capacity` | Compute Server Capacity for hosting virtualmachines based on user inputs | public |

### **Validate Rule**

- **URL**
  - /api/v1/compute-server-capacity
- **Method**
  - `POST`
- **Data Params**
  - **Required**
    - `server={ CPU: number, RAM:number, HDD: number }`
    - `virtualMachines=[{ CPU: number, RAM:number, HDD: number }]`
- **Success Response**
  - **Code:** 200
  - **Content:**
  ```
  {
    "status": "success",
    "message": "Server capacity is successfully calculated.",
    "data": {
        "serverCapacity": 2
    }
  }
  ```
- **Failure Response**

  - **Code:** 422
  - **Content:**

  ```
  {
    "status": "error",
    "message": "'server.CPU' is required",
    "data": null
  }
  ```

  **OR**

  - **Code:** 422
  - **Content:**

  ```
  {
    "status": "error",
    "message": "'server' must be of type object",
    "data": null
  }
  ```

  **OR**

  - **Code:** 422
  - **Content:**

  ```
  {
    "status": "error",
    "message": "'virtualMachines' is required",
    "data": null
  }
  ```

  **OR**

  - **Code:** 500
  - **Content:**

  ```
  {
    "message": "Internal Server Error",
    "status": "error",
    "data": null
  }
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Author

**Agbolade Adeniyi**
