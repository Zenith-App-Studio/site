// منوی همبرگر برای موبایل
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// بستن منو با کلیک روی لینک‌ها
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// اسکرول نرم برای لینک‌های داخلی
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// افکت ظاهر شدن با اسکرول
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// مشاهده المان‌ها برای انیمیشن
document.querySelectorAll('.service-card, .portfolio-card, .info-item').forEach(el => {
    observer.observe(el);
});

// فرم تماس (پیام موفقیت)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // در اینجا می‌توانید کد ارسال به سرور را اضافه کنید
        // برای نمونه، یک پیام موفقیت نمایش می‌دهیم
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-check"></i> پیام ارسال شد!';
        submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
        
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.style.background = '';
            this.reset();
        }, 3000);
    });
}

// تغییر تم تاریک/روشن
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// بررسی تم ذخیره شده در localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

// آپدیت آیکون بر اساس تم فعلی
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // تغییر تم
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // آپدیت آیکون
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
        themeToggle.setAttribute('aria-label', 'تغییر به تم روشن');
    } else {
        icon.className = 'fas fa-sun';
        themeToggle.setAttribute('aria-label', 'تغییر به تم تاریک');
    }
}

// تشخیص تم سیستم کاربر (اختیاری)
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', systemTheme);
    localStorage.setItem('theme', systemTheme);
    updateThemeIcon(systemTheme);
}

// منوی همبرگر (کد موجود شما)

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// بستن منو با کلیک روی لینک‌ها
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});