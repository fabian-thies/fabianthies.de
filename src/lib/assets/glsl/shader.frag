precision highp float;
uniform vec2 iResolution;
uniform float iTime;

void mainImage(out vec4 o, vec2 fragCoord){
    vec2 v=fragCoord;
    o=vec4(iResolution.xy, 0.0, 1.0);
    vec2 u=(v+v-o.xy)/o.y;
    u/=0.5+0.2*dot(u, u);
    u+=0.2*cos(iTime)-7.56;
    for (int i=0;i<3;++i){
        o[i]=1.0-exp(-6.0/exp(6.0*length(
        v+sin(5.0*v.y-3.0*iTime)/4.0)));
        v=sin(1.5*u.yx+2.0*cos(u-=0.01));
    }
}

void main(){
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor=color;
}
