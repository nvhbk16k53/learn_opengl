#ifndef SHADER_H
#define SHADER_H

#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

#include <GL/glew.h>

class Shader
{
public:
    GLuint program_;
    Shader(const GLchar *vertexPath, const GLchar *fragmentPath);
    void use();
};

#endif // SHADER_H
