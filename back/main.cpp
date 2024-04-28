#include "crow.h"

#include <iostream>
#include <string>

int main() {
    
    crow::SimpleApp app;

    CROW_ROUTE(app, "/").methods(crow::HTTPMethod::Post)([] (const crow::request& request) 
    {
        std::string postData = request.body;

        return crow::response("Received POST data: " + postData);
    });

    app.port(8000).multithreaded().run();
}
