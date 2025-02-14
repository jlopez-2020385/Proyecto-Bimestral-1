import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Productos API",
            version: "1.0.0",
            description: "API de gestión de productos",
            contact:{
                name: "José Luis Emanuel",
                email: "jlopez-2020385@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/"
            }
        ]
    },
    apis:[

    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}