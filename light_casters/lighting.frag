#version 330 core

struct Material {
	sampler2D diffuse;
	sampler2D specular;
	float shininess;
};

struct DirectionLight {
	vec3 direction;

	vec3 ambient;
	vec3 diffuse;
	vec3 specular;
};

struct PositionLight {
	vec3 position;

	vec3 ambient;
	vec3 diffuse;
	vec3 specular;

	float constant;
	float linear;
	float quadratic;
};

struct SpotLight {
	vec3 position;
	vec3 direction;
	float cutOff;
	float outerCutOff;

	vec3 ambient;
	vec3 diffuse;
	vec3 specular;

	float constant;
	float linear;
	float quadratic;
};

uniform Material material;
//uniform DirectionLight light;
//uniform PositionLight light;
uniform SpotLight light;

in vec3 FragPos;
in vec3 Normal;
in vec2 TexCoords;

out vec4 color;

uniform vec3 viewPos;

void main()
{
    vec3 lightDir = normalize(light.position - FragPos);
    
    // Check if lighting is inside the spotlight cone
    float theta = dot(lightDir, normalize(-light.direction)); 
	float epsilon = light.cutOff - light.outerCutOff;
	float intensity = clamp((theta - light.outerCutOff) / epsilon, 0.0f, 1.0f);
    
	// Ambient
	vec3 ambient = light.ambient * vec3(texture(material.diffuse, TexCoords));
        
	// Diffuse 
	vec3 norm = normalize(Normal);        
	float diff = max(dot(norm, lightDir), 0.0);
	vec3 diffuse = light.diffuse * diff * vec3(texture(material.diffuse, TexCoords));  
        
	// Specular
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 reflectDir = reflect(-lightDir, norm);  
	float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
	vec3 specular = light.specular * spec * vec3(texture(material.specular, TexCoords));
        
	// Attenuation
	float distance    = length(light.position - FragPos);
	float attenuation = 1.0f / (light.constant + light.linear * distance + light.quadratic * (distance * distance));    

	diffuse  *= attenuation;
	specular *= attenuation;   
	diffuse *= intensity;
	specular *= intensity;
                
	color = vec4(ambient + diffuse + specular, 1.0f);  
}
