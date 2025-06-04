function BotonExportarCSV({ datos, nombreArchivo }) {
    const handleClick = () => {
        // Verificar que hay datos
        if (!datos || datos.length === 0) {
            console.error('No hay datos para exportar');
            return;
        }

        // Encabezados del CSV (usamos las keys del primer objeto)
        const headers = Object.keys(datos[0]);
        
        // Convertir los datos a CSV
        const csvRows = [];
        
        // Añadir encabezados
        csvRows.push(headers.join(','));
        
        // Añadir filas de datos
        datos.forEach(item => {
            const values = headers.map(header => {
                // Escapar comillas para evitar problemas en el CSV
                const escaped = ('' + item[header]).replace(/"/g, '\\"');
                return `"${escaped}"`;
            });
            csvRows.push(values.join(','));
        });

        // Crear el contenido CSV
        const csvContent = csvRows.join('\n');
        
        // Crear el blob
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        
        // Crear URL para descarga
        const url = URL.createObjectURL(blob);
        
        // Crear elemento <a> para descarga
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', nombreArchivo || 'datos.csv');
        link.style.visibility = 'hidden';
        
        // Añadir al DOM y hacer click
        document.body.appendChild(link);
        link.click();
        
        // Limpiar
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <button className="button-report" onClick={handleClick}>
            Exportar a CSV
        </button>
    );
}

export default BotonExportarCSV;