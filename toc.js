// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="前言.html">前言</a></li><li class="chapter-item affix "><li class="part-title">Books</li><li class="chapter-item "><a href="FinStatements/一本书读懂财报.html"><strong aria-hidden="true">1.</strong> 一本书读懂财报</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="FinStatements/资产负债表：企业的照相机.html"><strong aria-hidden="true">1.1.</strong> 资产负债表：企业的照相机</a></li><li class="chapter-item "><a href="FinStatements/利润表：企业的摄像机.html"><strong aria-hidden="true">1.2.</strong> 利润表：企业的摄像机</a></li><li class="chapter-item "><a href="FinStatements/财务报表的诞生和内在逻辑.html"><strong aria-hidden="true">1.3.</strong> 财务报表的诞生和内在逻辑</a></li><li class="chapter-item "><a href="FinStatements/解剖现金流量表.html"><strong aria-hidden="true">1.4.</strong> 解剖现金流量表</a></li><li class="chapter-item "><a href="FinStatements/活用三张报表，打通财务数据经脉.html"><strong aria-hidden="true">1.5.</strong> 活用三张报表，打通财务数据经脉</a></li><li class="chapter-item "><a href="FinStatements/找出影响财务数据的因素.html"><strong aria-hidden="true">1.6.</strong> 找出影响财务数据的因素</a></li><li class="chapter-item "><a href="FinStatements/怎样的公司才算是好公司？.html"><strong aria-hidden="true">1.7.</strong> 怎样的公司才算是好公司？</a></li><li class="chapter-item "><a href="FinStatements/控制风险的要诀.html"><strong aria-hidden="true">1.8.</strong> 控制风险的要诀</a></li></ol></li><li class="chapter-item "><a href="聪明的投资者.html"><strong aria-hidden="true">2.</strong> 聪明的投资者</a></li><li class="chapter-item "><a href="证券分析.html"><strong aria-hidden="true">3.</strong> 证券分析</a></li><li class="chapter-item "><a href="投资最重要的事.html"><strong aria-hidden="true">4.</strong> 投资最重要的事</a></li><li class="chapter-item "><a href="小狗钱钱.html"><strong aria-hidden="true">5.</strong> 小狗钱钱</a></li><li class="chapter-item "><a href="富爸爸穷爸爸系列.html"><strong aria-hidden="true">6.</strong> 富爸爸穷爸爸系列</a></li><li class="chapter-item "><a href="巴比伦最富有的人.html"><strong aria-hidden="true">7.</strong> 巴比伦最富有的人</a></li><li class="chapter-item affix "><li class="part-title">Online Courses</li><li class="chapter-item "><a href="生活中的货币时间价值.html"><strong aria-hidden="true">8.</strong> JNU生活中的货币时间价值</a></li><li class="chapter-item "><a href="财务分析与决策.html"><strong aria-hidden="true">9.</strong> THU财务分析与决策</a></li><li class="chapter-item "><a href="财务报表分析.html"><strong aria-hidden="true">10.</strong> UIBE财务报表分析</a></li><li class="chapter-item "><a href="货币金融学.html"><strong aria-hidden="true">11.</strong> UIBE货币金融学</a></li><li class="chapter-item "><a href="管理会计学.html"><strong aria-hidden="true">12.</strong> SWUFE管理会计学</a></li><li class="chapter-item "><a href="FinMath/金融数学.html"><strong aria-hidden="true">13.</strong> RUC金融数学</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="FinMath/利息度量.html"><strong aria-hidden="true">13.1.</strong> 利息度量</a></li><li class="chapter-item "><a href="FinMath/等额年金.html"><strong aria-hidden="true">13.2.</strong> 等额年金</a></li><li class="chapter-item "><a href="FinMath/变额年金.html"><strong aria-hidden="true">13.3.</strong> 变额年金</a></li><li class="chapter-item "><a href="FinMath/收益率.html"><strong aria-hidden="true">13.4.</strong> 收益率</a></li><li class="chapter-item "><a href="FinMath/债务偿还.html"><strong aria-hidden="true">13.5.</strong> 债务偿还</a></li><li class="chapter-item "><a href="FinMath/债券.html"><strong aria-hidden="true">13.6.</strong> 债券</a></li><li class="chapter-item "><a href="FinMath/利率风险.html"><strong aria-hidden="true">13.7.</strong> 利率风险</a></li><li class="chapter-item "><a href="FinMath/远期期货和互换.html"><strong aria-hidden="true">13.8.</strong> 远期期货和互换</a></li><li class="chapter-item "><a href="FinMath/期权.html"><strong aria-hidden="true">13.9.</strong> 期权</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
