declare module 'rutificador' {
    export default function(info: { rut?: string, name?: string }): Promise<{ rut?: string, name?: string }>;
}
