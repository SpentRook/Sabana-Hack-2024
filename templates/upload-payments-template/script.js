// Upload Payments Template - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.querySelector('.upload-area');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const removeFile = document.getElementById('removeFile');
    const downloadTemplate = document.getElementById('downloadTemplate');
    const confirmUpload = document.getElementById('confirmUpload');
    const progressContainer = document.getElementById('progressContainer');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    let selectedFile = null;

    // File input change handler
    fileInput.addEventListener('change', handleFileSelect);

    // Drag and drop handlers
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);

    // Remove file handler
    removeFile.addEventListener('click', clearFile);

    // Download template handler
    downloadTemplate.addEventListener('click', handleDownloadTemplate);

    // Confirm upload handler
    confirmUpload.addEventListener('click', handleConfirmUpload);

    function handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            processFile(file);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    }

    function handleDragLeave(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    }

    function handleDrop(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            processFile(file);
            // Update the file input
            const dt = new DataTransfer();
            dt.items.add(file);
            fileInput.files = dt.files;
        }
    }

    function processFile(file) {
        // Validate file type
        const allowedTypes = ['.csv', '.xlsx', '.xls'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
        
        if (!allowedTypes.includes(fileExtension)) {
            alert('Por favor selecciona un archivo CSV o Excel (.xlsx, .xls)');
            return;
        }

        // Validate file size (max 10MB)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            alert('El archivo es demasiado grande. Máximo 10MB permitido.');
            return;
        }

        selectedFile = file;
        displayFileInfo(file);
    }

    function displayFileInfo(file) {
        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);
        
        // Hide upload area and show file info
        uploadArea.style.display = 'none';
        fileInfo.style.display = 'block';
        
        // Enable confirm button
        confirmUpload.disabled = false;
    }

    function clearFile() {
        selectedFile = null;
        fileInput.value = '';
        
        // Hide file info and show upload area
        fileInfo.style.display = 'none';
        uploadArea.style.display = 'block';
        
        // Disable confirm button
        confirmUpload.disabled = true;
        
        // Hide progress if visible
        progressContainer.style.display = 'none';
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handleDownloadTemplate() {
        // Create sample CSV template
        const csvContent = createSampleTemplate();
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'plantilla_pagos.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }

    function createSampleTemplate() {
        const headers = [
            'ID_Transaccion',
            'Fecha_Pago',
            'Monto',
            'Moneda',
            'Metodo_Pago',
            'ID_Cliente',
            'Nombre_Cliente',
            'Email_Cliente',
            'Estado',
            'Descripcion'
        ];

        const sampleRows = [
            ['001', '2024-01-15', '150.00', 'USD', 'Tarjeta_Credito', 'CLI001', 'Juan Pérez', 'juan.perez@email.com', 'Completado', 'Pago de factura #123'],
            ['002', '2024-01-16', '75.50', 'USD', 'Transferencia', 'CLI002', 'María García', 'maria.garcia@email.com', 'Pendiente', 'Pago de servicio mensual'],
            ['003', '2024-01-17', '200.00', 'USD', 'PayPal', 'CLI003', 'Carlos López', 'carlos.lopez@email.com', 'Completado', 'Pago de producto #456']
        ];

        let csv = headers.join(',') + '\n';
        sampleRows.forEach(row => {
            csv += row.join(',') + '\n';
        });

        return csv;
    }

    function handleConfirmUpload() {
        if (!selectedFile) return;
        
        // Show progress
        progressContainer.style.display = 'block';
        confirmUpload.disabled = true;
        
        // Simulate upload progress
        simulateUpload();
    }

    function simulateUpload() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                handleUploadComplete();
            }
            
            progressFill.style.width = progress + '%';
            progressText.textContent = `Subiendo archivo... ${Math.round(progress)}%`;
        }, 200);
    }

    function handleUploadComplete() {
        progressText.textContent = 'Archivo subido exitosamente';
        progressFill.style.backgroundColor = 'var(--success-color)';
        
        setTimeout(() => {
            // Reset form after successful upload
            clearFile();
            progressContainer.style.display = 'none';
            progressFill.style.backgroundColor = 'var(--primary-color)';
            progressFill.style.width = '0%';
            confirmUpload.disabled = false;
            
            // Show success message
            showNotification('Archivo procesado exitosamente', 'success');
        }, 1500);
    }

    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'var(--success-color)' : 'var(--primary-color)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--border-radius-md)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '1000',
            animation: 'slideInRight 0.3s ease'
        });
        
        // Add CSS for animation
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Initialize tooltips for better UX
    addTooltips();

    function addTooltips() {
        const tooltips = [
            { element: downloadTemplate, text: 'Descarga un archivo de ejemplo con el formato correcto' },
            { element: confirmUpload, text: 'Procesa y sube el archivo seleccionado' }
        ];

        tooltips.forEach(({ element, text }) => {
            element.setAttribute('title', text);
        });
    }
});