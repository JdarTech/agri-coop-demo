(function () {
  var SCREENS = [
    {
      id: "accounts",
      timeless: true,
      title: "بطاقة الحسابات",
      blurb: "دليل حسابات الجمعية مع الرصيد الحالي وآخر الحركات.",
      metrics: [
        { label: "عدد الحسابات", value: "12" },
        { label: "أصول متداولة", money: 663400 },
        { label: "التزامات", money: 43600 }
      ],
      columns: [
        { key: "code", label: "الرمز" },
        { key: "name", label: "اسم الحساب" },
        { key: "type", label: "النوع" },
        { key: "balance", label: "الرصيد", money: true }
      ],
      rows: [
        acc("1101", "الصندوق", "أصل", 48250, [
          mv("03 نوفمبر", "سند قبض RC-318", "تحصيل مزرعة الواحة", 18600, 0),
          mv("02 نوفمبر", "سند صرف PV-204", "أجور نقل التمور", 0, 2400),
          mv("01 نوفمبر", "قيد JV-088", "رصيد افتتاحي للصندوق", 32050, 0)
        ]),
        acc("1102", "البنك الأهلي — جاري", "أصل", 312400, [
          mv("04 نوفمبر", "سند قبض RC-321", "تحويل شركة التمور المتحدة", 42000, 0),
          mv("03 نوفمبر", "سند صرف PV-207", "سداد مؤسسة البذور", 0, 15800),
          mv("28 أكتوبر", "قيد JV-081", "إيداع مبيعات الجملة", 96400, 0)
        ]),
        acc("1201", "العملاء", "أصل", 86750, [
          mv("04 نوفمبر", "فاتورة SI-1048", "مزرعة النخيل الذهبي", 27450, 0),
          mv("03 نوفمبر", "سند قبض RC-318", "تحصيل مزرعة الواحة", 0, 18600),
          mv("30 أكتوبر", "فاتورة SI-1033", "سوق الجملة المركزي", 41200, 0)
        ]),
        acc("1301", "مخزون التمور", "أصل", 154200, [
          mv("02 نوفمبر", "فاتورة مشتريات PI-552", "استلام خلاص وسكري", 48600, 0),
          mv("04 نوفمبر", "فاتورة مبيعات SI-1048", "صرف للبيع", 0, 9800),
          mv("29 أكتوبر", "جرد", "تسوية جرد المستودع", 0, 1250)
        ]),
        acc("1302", "مخزون الحبوب والأعلاف", "أصل", 61800, [
          mv("01 نوفمبر", "فاتورة مشتريات PI-548", "شعير وأعلاف", 21400, 0),
          mv("03 نوفمبر", "فاتورة مبيعات SI-1044", "صرف شعير", 0, 6300)
        ]),
        acc("2101", "الموردون", "التزام", 43600, [
          mv("02 نوفمبر", "فاتورة مشتريات PI-552", "مؤسسة الواحة للتمور", 48600, 0),
          mv("03 نوفمبر", "سند صرف PV-207", "سداد مؤسسة البذور", 0, 15800)
        ]),
        acc("4101", "إيرادات مبيعات التمور", "إيراد", 186400, [
          mv("04 نوفمبر", "فاتورة SI-1048", "مزرعة النخيل الذهبي", 27450, 0),
          mv("03 نوفمبر", "فاتورة SI-1042", "مزرعة الواحة", 20102, 0)
        ]),
        acc("5101", "تكلفة البضاعة المباعة", "مصروف", 74200, [
          mv("04 نوفمبر", "قيد تكلفة", "تكلفة فاتورة SI-1048", 9800, 0),
          mv("03 نوفمبر", "قيد تكلفة", "تكلفة فاتورة SI-1042", 8640, 0)
        ])
      ]
    },
    {
      id: "journal",
      title: "سند القيد",
      blurb: "قيود يومية متوازنة للجمعية، مع بيان كل طرف.",
      metrics: [
        { label: "قيود هذا الشهر", value: "6" },
        { label: "مدين", money: 128640 },
        { label: "دائن", money: 128640 }
      ],
      columns: [
        { key: "no", label: "رقم القيد" },
        { key: "date", label: "التاريخ" },
        { key: "memo", label: "البيان" },
        { key: "status", label: "الحالة" },
        { key: "total", label: "المبلغ", money: true }
      ],
      rows: [
        doc("JV-091", "04 نوفمبر", "today", "إثبات تكلفة مبيعات التمور — SI-1048", "مرحّل", 9800, "أحمد الشهري", [
          line("5101", "تكلفة البضاعة المباعة", 9800, 0, "تكلفة سكري وخلاص"),
          line("1301", "مخزون التمور", 0, 9800, "صرف من مستودع بريدة")
        ], "قيد آلي من فاتورة المبيعات SI-1048. المستودع: بريدة الرئيسي."),
        doc("JV-090", "03 نوفمبر", "yesterday", "استهلاك معدات الفرز والتعبئة", "مرحّل", 1750, "نورة القحطاني", [
          line("5204", "مصروف الاستهلاك", 1750, 0, "قسط نوفمبر"),
          line("1508", "مجمع استهلاك المعدات", 0, 1750, "خط الفرز")
        ], "قسط شهري ثابت حسب سجل الأصول."),
        doc("JV-089", "02 نوفمبر", "week", "تسوية عجز جرد مستودع التمور", "معتمد", 1250, "خالد العتيبي", [
          line("5104", "عجز مخزون", 1250, 0, "فرق جرد 03 نوفمبر"),
          line("1301", "مخزون التمور", 0, 1250, "سكري درجة ثانية")
        ], "اعتمد بعد مطابقة بطاقة الصنف مع العد الفعلي."),
        doc("JV-088", "01 نوفمبر", "month", "إقفال رصيد الصندوق الافتتاحي", "مرحّل", 32050, "أحمد الشهري", [
          line("1101", "الصندوق", 32050, 0, "عدّ نقدي"),
          line("3101", "الحساب الجاري للجمعية", 0, 32050, "رصيد أول الفترة")
        ], "مطابق لمحضر الجرد النقدي بتاريخ 1 نوفمبر.")
      ]
    },
    {
      id: "payment",
      title: "سند الصرف",
      blurb: "مدفوعات نقدية وبنكية مع المستفيد وبنود الصرف.",
      metrics: [
        { label: "سندات مصروفة", value: "4" },
        { label: "نقداً", money: 6400 },
        { label: "تحويل بنكي", money: 38600 }
      ],
      columns: [
        { key: "no", label: "رقم السند" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "المستفيد" },
        { key: "method", label: "طريقة الدفع" },
        { key: "total", label: "المبلغ", money: true }
      ],
      rows: [
        pay("PV-208", "04 نوفمبر", "today", "شركة نقل الواحات", "تحويل بنكي", 8600, "خالد العتيبي", [
          line("5202", "مصروف النقل", 8600, 0, "رحلة بريدة — الرياض، 4 برادات")
        ], "البنك الأهلي. مرجع الحوالة TR-88421. بوليصة الشحن SH-441."),
        pay("PV-207", "03 نوفمبر", "yesterday", "مؤسسة البذور الزراعية", "تحويل بنكي", 15800, "نورة القحطاني", [
          line("2101", "الموردون", 15800, 0, "سداد فاتورة PI-548")
        ], "يسدد جزءًا من فاتورة الشعير والأعلاف. المتبقي على المورد 5,600 ر.س."),
        pay("PV-204", "02 نوفمبر", "week", "سائقو الجمعية", "نقداً", 2400, "أحمد الشهري", [
          line("5202", "مصروف النقل", 1800, 0, "أجور توصيل داخلي"),
          line("5206", "مصروف نثري", 600, 0, "وقود")
        ], "صُرف من الصندوق بموجب كشف المستلمين."),
        pay("PV-199", "28 أكتوبر", "month", "شركة الكهرباء", "تحويل بنكي", 14200, "نورة القحطاني", [
          line("5203", "مصروف مرافق", 14200, 0, "فاتورة أكتوبر — مستودع وثلاجات")
        ], "تشمل استهلاك غرف التبريد.")
      ]
    },
    {
      id: "receipt",
      title: "سند القبض",
      blurb: "مقبوضات العملاء والتحصيل النقدي والبنكي.",
      metrics: [
        { label: "سندات القبض", value: "4" },
        { label: "المحصّل", money: 97800 },
        { label: "نقداً", money: 18600 }
      ],
      columns: [
        { key: "no", label: "رقم السند" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "استُلم من" },
        { key: "method", label: "طريقة القبض" },
        { key: "total", label: "المبلغ", money: true }
      ],
      rows: [
        recv("RC-321", "04 نوفمبر", "today", "شركة التمور المتحدة", "تحويل بنكي", 42000, "نورة القحطاني", [
          line("1102", "البنك الأهلي", 42000, 0, "وارد"),
          line("1201", "العملاء", 0, 42000, "تسوية فاتورة SI-1021")
        ], "حوالة واردة. المرجع BN-22091. أُقفلت فاتورة أكتوبر بالكامل."),
        recv("RC-318", "03 نوفمبر", "yesterday", "مزرعة الواحة", "نقداً", 18600, "أحمد الشهري", [
          line("1101", "الصندوق", 18600, 0, "وارد"),
          line("1201", "العملاء", 0, 18600, "دفعة تحت فاتورة SI-1042")
        ], "المتبقي على الفاتورة 1,502 ر.س يُحصّل مع التسليم القادم."),
        recv("RC-314", "30 أكتوبر", "week", "سوق الجملة المركزي", "تحويل بنكي", 25000, "خالد العتيبي", [
          line("1102", "البنك الأهلي", 25000, 0, "وارد"),
          line("1201", "العملاء", 0, 25000, "دفعة من فاتورة SI-1033")
        ], "دفعة أولى. المتبقي 16,200 ر.س."),
        recv("RC-309", "26 أكتوبر", "month", "جمعية التسويق التعاوني", "شيك", 12200, "نورة القحطاني", [
          line("1103", "شيكات برسم التحصيل", 12200, 0, "شيك 44190"),
          line("4101", "إيرادات مبيعات التمور", 0, 12200, "بيع درجة أولى")
        ], "تاريخ استحقاق الشيك 12 نوفمبر.")
      ]
    },
    {
      id: "account-report",
      timeless: true,
      title: "تقرير الحسابات",
      blurb: "كشف حساب للفترة مع الرصيد الافتتاحي والحركة والختامي.",
      metrics: [
        { label: "حركة مدينة", money: 214800 },
        { label: "حركة دائنة", money: 168450 },
        { label: "صافي الحركة", money: 46350 }
      ],
      columns: [
        { key: "code", label: "الرمز" },
        { key: "name", label: "الحساب" },
        { key: "open", label: "افتتاحي", money: true },
        { key: "debit", label: "مدين", money: true },
        { key: "credit", label: "دائن", money: true },
        { key: "close", label: "ختامي", money: true }
      ],
      rows: [
        reportAcc("1101", "الصندوق", 32050, 18600, 2400, 48250, [
          mv("01 نوفمبر", "JV-088", "رصيد افتتاحي", 32050, 0),
          mv("02 نوفمبر", "PV-204", "أجور نقل", 0, 2400),
          mv("03 نوفمبر", "RC-318", "تحصيل مزرعة الواحة", 18600, 0)
        ]),
        reportAcc("1102", "البنك الأهلي", 190800, 163400, 41800, 312400, [
          mv("28 أكتوبر", "JV-081", "إيداع مبيعات", 96400, 0),
          mv("28 أكتوبر", "PV-199", "كهرباء", 0, 14200),
          mv("03 نوفمبر", "PV-207", "سداد مورد", 0, 15800),
          mv("04 نوفمبر", "RC-321", "تحصيل عميل", 42000, 0),
          mv("04 نوفمبر", "PV-208", "نقل", 0, 8600)
        ]),
        reportAcc("1201", "العملاء", 56700, 88650, 58600, 86750, [
          mv("30 أكتوبر", "SI-1033", "سوق الجملة", 41200, 0),
          mv("30 أكتوبر", "RC-314", "تحصيل", 0, 25000),
          mv("03 نوفمبر", "SI-1042", "مزرعة الواحة", 20102, 0),
          mv("03 نوفمبر", "RC-318", "تحصيل نقدي", 0, 18600),
          mv("04 نوفمبر", "SI-1048", "النخيل الذهبي", 27450, 0)
        ]),
        reportAcc("4101", "إيرادات مبيعات التمور", 0, 0, 186400, 186400, [
          mv("أكتوبر", "فواتير", "مبيعات الشهر السابق", 0, 138848),
          mv("نوفمبر", "فواتير", "مبيعات حتى 4 نوفمبر", 0, 47552)
        ])
      ]
    },
    {
      id: "stock-card",
      timeless: true,
      title: "بطاقة المخزون",
      blurb: "بطاقة صنف: الرصيد، متوسط التكلفة، وآخر الحركات.",
      metrics: [
        { label: "أصناف نشطة", value: "6" },
        { label: "قيمة المخزون", money: 216000 },
        { label: "أصناف تحت الحد", value: "1" }
      ],
      columns: [
        { key: "sku", label: "الرمز" },
        { key: "name", label: "الصنف" },
        { key: "qty", label: "الكمية" },
        { key: "cost", label: "متوسط التكلفة", money: true },
        { key: "value", label: "القيمة", money: true }
      ],
      rows: [
        item("TM-SKR-1", "تمر سكري درجة أولى", "8,400 كجم", 14.5, 121800, "مستودع بريدة", [
          stockMv("02 نوفمبر", "PI-552", "استلام شراء", 2200, 0, "15.20 ر.س"),
          stockMv("04 نوفمبر", "SI-1048", "صرف مبيعات", 0, 620, "14.50 ر.س"),
          stockMv("03 نوفمبر", "SI-1042", "صرف مبيعات", 0, 400, "14.50 ر.س")
        ], "حد إعادة الطلب 2,000 كجم. المورد المفضّل: مزارع القصيم."),
        item("TM-KHL-1", "تمر خلاص", "1,860 كجم", 17.4, 32364, "مستودع بريدة", [
          stockMv("02 نوفمبر", "PI-552", "استلام شراء", 900, 0, "18.10 ر.س"),
          stockMv("03 نوفمبر", "SI-1042", "صرف مبيعات", 0, 180, "17.40 ر.س")
        ], "يُخزّن في الغرفة المبردة 4°."),
        item("GR-BAR", "شعير علفي", "14,200 كجم", 1.85, 26270, "مستودع الحبوب", [
          stockMv("01 نوفمبر", "PI-548", "استلام شراء", 8000, 0, "1.90 ر.س"),
          stockMv("03 نوفمبر", "SI-1044", "صرف مبيعات", 0, 2400, "1.85 ر.س")
        ], "تحت حد إعادة الطلب (15,000 كجم). يُقترح إصدار أمر شراء."),
        item("FRT-NPK", "سماد مركب NPK", "640 كيس", 42, 26880, "مستودع المستلزمات", [
          stockMv("29 أكتوبر", "PI-541", "استلام", 400, 0, "42.00 ر.س"),
          stockMv("02 نوفمبر", "صرف داخلي", "توزيع على الأعضاء", 0, 80, "42.00 ر.س")
        ], "كيس 50 كجم. خاص بأعضاء الجمعية.")
      ]
    },
    {
      id: "sales",
      title: "فاتورة المبيعات",
      blurb: "فواتير بيع التمور والحبوب للأعضاء والعملاء.",
      metrics: [
        { label: "فواتير الفترة", value: "4" },
        { label: "قبل الضريبة", money: 84220 },
        { label: "الإجمالي مع الضريبة", money: 96853 }
      ],
      columns: [
        { key: "no", label: "رقم الفاتورة" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "العميل" },
        { key: "status", label: "الحالة" },
        { key: "total", label: "الإجمالي", money: true }
      ],
      rows: [
        invoice("SI-1048", "04 نوفمبر", "today", "مزرعة النخيل الذهبي", "مرحّلة", 0, [
          prod("تمر سكري درجة أولى", 620, "كجم", 32, 19840),
          prod("تمر خلاص", 160, "كجم", 42, 6720),
          prod("خصم عضو جمعية", "—", "", -1110, -1110)
        ], 15, "تسليم مستودع بريدة. آجل 15 يوماً. المندوب: سعد الدوسري."),
        invoice("SI-1044", "03 نوفمبر", "yesterday", "مشروع أعلاف الشمال", "مرحّلة", 0, [
          prod("شعير علفي", 2400, "كجم", 3.4, 8160),
          prod("علف تسمين", 80, "كيس", 59, 4720)
        ], 15, "خرجت من مستودع الحبوب. سند الصرف المخزني OUT-331."),
        invoice("SI-1042", "03 نوفمبر", "week", "مزرعة الواحة", "محصّلة جزئياً", 20102, [
          prod("تمر سكري درجة أولى", 400, "كجم", 28, 11200),
          prod("تمر خلاص", 180, "كجم", 36, 6480),
          prod("خصم كمية", "—", "", -200, -200)
        ], 15, "حُصّل 18,600 ر.س نقداً بسند RC-318. المتبقي 1,502 ر.س."),
        invoice("SI-1033", "30 أكتوبر", "week", "سوق الجملة المركزي", "آجلة", 0, [
          prod("تمر سكري درجة أولى", 900, "كجم", 27, 24300),
          prod("تمر صقعي", 260, "كجم", 31, 8060)
        ], 15, "دفعة مقدمة 25,000 ر.س. الاستحقاق 14 نوفمبر.")
      ]
    },
    {
      id: "sales-return",
      title: "مرتجعات المبيعات",
      blurb: "مرتجعات العملاء مع سبب الإرجاع وأثرها على المخزون.",
      metrics: [
        { label: "إشعارات دائنة", value: "3" },
        { label: "قيمة المرتجعات", money: 4860 },
        { label: "أُعيد للمخزون", value: "140 كجم" }
      ],
      columns: [
        { key: "no", label: "رقم المرتجع" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "العميل" },
        { key: "ref", label: "الفاتورة" },
        { key: "total", label: "القيمة", money: true }
      ],
      rows: [
        ret("SR-077", "04 نوفمبر", "today", "مزرعة النخيل الذهبي", "SI-1048", 0, [
          prod("تمر خلاص — رطوبة زائدة", 40, "كجم", 42, 1680)
        ], 15, "فُحص المرتجع ورُفض إعادته للمخزون القابل للبيع. يُحوّل للدرجة الثانية."),
        ret("SR-074", "01 نوفمبر", "month", "سوق الجملة المركزي", "SI-1028", 2415, [
          prod("تمر سكري درجة أولى", 75, "كجم", 28, 2100)
        ], 15, "أُعيد إلى مستودع بريدة بحالة سليمة. بطاقة الصنف TM-SKR-1."),
        ret("SR-069", "22 أكتوبر", "month", "مزرعة الواحة", "SI-1004", 0, [
          prod("أكياس تعبئة 1 كجم تالفة", 30, "كيس", 14.9, 447)
        ], 15, "استبدال من دفعة التعبئة التالية، بدون أثر نقدي.")
      ]
    },
    {
      id: "purchase",
      title: "فاتورة المشتريات",
      blurb: "مشتريات المحصول والمستلزمات من المزارعين والموردين.",
      metrics: [
        { label: "فواتير الشراء", value: "3" },
        { label: "تكلفة الاستلام", money: 81220 },
        { label: "غير مسددة", money: 59800 }
      ],
      columns: [
        { key: "no", label: "رقم الفاتورة" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "المورد" },
        { key: "status", label: "السداد" },
        { key: "total", label: "الإجمالي", money: true }
      ],
      rows: [
        pinvoice("PI-552", "02 نوفمبر", "week", "مؤسسة الواحة للتمور", "آجلة", 55900, [
          prod("تمر سكري درجة أولى", 2200, "كجم", 15.2, 33440),
          prod("تمر خلاص", 900, "كجم", 18.1, 16290)
        ], 0, "شراء من عضو. معفاة من الضريبة حسب إفادة المزارع. أُدخل للمخزون."),
        pinvoice("PI-548", "01 نوفمبر", "month", "مؤسسة البذور الزراعية", "مسددة جزئياً", 21400, [
          prod("شعير علفي", 8000, "كجم", 1.9, 15200),
          prod("أجور تفريغ", 1, "—", 3400, 3400)
        ], 15, "سُدد 15,800 ر.س بسند PV-207. المتبقي 5,600 ر.س."),
        pinvoice("PI-541", "29 أكتوبر", "week", "شركة الأسمدة الوطنية", "مسددة", 0, [
          prod("سماد مركب NPK 50 كجم", 400, "كيس", 42, 16800)
        ], 15, "سداد كامل حوالة 29 أكتوبر. المستودع: المستلزمات.")
      ]
    },
    {
      id: "purchase-return",
      title: "مرتجعات المشتريات",
      blurb: "إرجاع للموردين بسبب جودة أو اختلاف الوزن.",
      metrics: [
        { label: "مرتجعات", value: "2" },
        { label: "قيمة الإرجاع", money: 6340 },
        { label: "إشعار دائن مستلم", value: "1" }
      ],
      columns: [
        { key: "no", label: "رقم المرتجع" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "المورد" },
        { key: "ref", label: "فاتورة الشراء" },
        { key: "total", label: "القيمة", money: true }
      ],
      rows: [
        pret("PR-031", "03 نوفمبر", "yesterday", "مؤسسة الواحة للتمور", "PI-552", 0, [
          prod("تمر خلاص دون المواصفة", 200, "كجم", 18.1, 3620)
        ], 0, "رُفض في الفحص. يُخصم من مستحق المورد. لم يُستلم إشعار دائن بعد."),
        pret("PR-028", "30 أكتوبر", "week", "شركة الأسمدة الوطنية", "PI-541", 0, [
          prod("أكياس ممزقة", 40, "كيس", 42, 1680),
          prod("فرق وزن", 1, "—", 1040, 1040)
        ], 0, "استُلم الإشعار الدائن CN-190. أُنزل من المخزون.")
      ]
    },
    {
      id: "quotes",
      title: "عروض الأسعار",
      blurb: "عروض صادرة للعملاء قبل تحويلها إلى فاتورة.",
      metrics: [
        { label: "عروض مفتوحة", value: "3" },
        { label: "قيمة العروض", money: 74690 },
        { label: "تنتهي هذا الأسبوع", value: "1" }
      ],
      columns: [
        { key: "no", label: "رقم العرض" },
        { key: "date", label: "التاريخ" },
        { key: "party", label: "العميل" },
        { key: "valid", label: "صالح حتى" },
        { key: "total", label: "القيمة", money: true }
      ],
      rows: [
        quote("QT-214", "04 نوفمبر", "today", "فندق النخيل", "11 نوفمبر", 0, [
          prod("تمر سكري فاخر معبأ 1 كجم", 400, "علبة", 36, 14400),
          prod("تمر خلاص فاخر معبأ 1 كجم", 240, "علبة", 48, 11520),
          prod("تغليف ضيافة", 1, "—", 2880, 2880)
        ], 15, "سعر عضو الضيافة. التحويل لفاتورة بعد اعتماد المشتريات لدى الفندق."),
        quote("QT-211", "02 نوفمبر", "week", "جمعية التسويق التعاوني", "09 نوفمبر", 27600, [
          prod("تمر سكري درجة أولى", 1000, "كجم", 24, 24000)
        ], 15, "سعر جملة مشروط باستلام دفعة واحدة من المستودع."),
        quote("QT-206", "28 أكتوبر", "month", "مشروع أعلاف الشمال", "20 نوفمبر", 13970, [
          prod("شعير علفي", 5000, "كجم", 3.1, 15500),
          prod("خصم تعاقد ربع سنوي", "—", "", -3350, -3350)
        ], 15, "العرض مربوط بتوفر الصنف GR-BAR. الكمية الحالية تغطي الطلب.")
      ]
    },
    {
      id: "stock-report",
      timeless: true,
      title: "التقارير المخزنية",
      blurb: "حركة المخزون وقيمته وافتتاحه وختامه خلال الفترة.",
      metrics: [
        { label: "وارد الفترة", money: 81220 },
        { label: "صادر الفترة", money: 28410 },
        { label: "قيمة الإقفال", money: 216000 }
      ],
      columns: [
        { key: "name", label: "الصنف" },
        { key: "openQty", label: "افتتاحي" },
        { key: "inQty", label: "وارد" },
        { key: "outQty", label: "صادر" },
        { key: "closeQty", label: "ختامي" },
        { key: "value", label: "قيمة الختام", money: true }
      ],
      rows: [
        stockReport("تمر سكري درجة أولى", "7,220 كجم", "2,200 كجم", "1,020 كجم", "8,400 كجم", 121800, [
          stockMv("01 نوفمبر", "رصيد", "افتتاحي", 7220, 0, "14.20 ر.س"),
          stockMv("02 نوفمبر", "PI-552", "شراء", 2200, 0, "15.20 ر.س"),
          stockMv("03 نوفمبر", "SI-1042", "بيع", 0, 400, "14.50 ر.س"),
          stockMv("04 نوفمبر", "SI-1048", "بيع", 0, 620, "14.50 ر.س")
        ]),
        stockReport("تمر خلاص", "1,340 كجم", "900 كجم", "380 كجم", "1,860 كجم", 32364, [
          stockMv("02 نوفمبر", "PI-552", "شراء", 900, 0, "18.10 ر.س"),
          stockMv("03 نوفمبر", "PR-031", "مرتجع شراء خرج", 0, 200, "18.10 ر.س"),
          stockMv("03 نوفمبر", "SI-1042", "بيع", 0, 180, "17.40 ر.س")
        ]),
        stockReport("شعير علفي", "8,600 كجم", "8,000 كجم", "2,400 كجم", "14,200 كجم", 26270, [
          stockMv("01 نوفمبر", "PI-548", "شراء", 8000, 0, "1.90 ر.س"),
          stockMv("03 نوفمبر", "SI-1044", "بيع", 0, 2400, "1.85 ر.س")
        ]),
        stockReport("سماد مركب NPK", "360 كيس", "400 كيس", "120 كيس", "640 كيس", 26880, [
          stockMv("29 أكتوبر", "PI-541", "شراء", 400, 0, "42.00 ر.س"),
          stockMv("30 أكتوبر", "PR-028", "مرتجع شراء", 0, 40, "42.00 ر.س"),
          stockMv("02 نوفمبر", "صرف أعضاء", "توزيع", 0, 80, "42.00 ر.س")
        ])
      ]
    }
  ];

  var PERIODS = [
    { id: "month", label: "هذا الشهر" },
    { id: "week", label: "آخر 7 أيام" },
    { id: "yesterday", label: "أمس" }
  ];

  var state = { screen: null, period: "month", row: 0 };

  function acc(code, name, type, balance, lines) {
    return {
      code: code, name: name, type: type, balance: balance, total: balance,
      period: "month",
      detailTitle: name,
      party: type,
      status: "نشط",
      note: "الرصيد ظاهر كما في 4 نوفمبر 2026.",
      lines: lines,
      lineCols: ["التاريخ", "المستند", "البيان", "مدين", "دائن"]
    };
  }
  function mv(date, ref, memo, debit, credit) {
    return [date, ref, memo, moneyOrDash(debit), moneyOrDash(credit)];
  }
  function doc(no, date, period, memo, status, total, user, lines, note) {
    return {
      no: no, date: date, period: period, memo: memo, status: status, total: total,
      party: user, note: note, detailTitle: no + " — " + memo,
      lines: lines.map(lineCells),
      lineCols: ["الحساب", "الاسم", "مدين", "دائن", "البيان"]
    };
  }
  function line(code, name, debit, credit, memo) {
    return { code: code, name: name, debit: debit, credit: credit, memo: memo };
  }
  function lineCells(l) {
    return [l.code, l.name, moneyOrDash(l.debit), moneyOrDash(l.credit), l.memo];
  }
  function pay(no, date, period, party, method, total, user, lines, note) {
    var row = doc(no, date, period, party, "مصروف", total, user, lines, note);
    row.method = method;
    row.party = party;
    row.memo = party;
    return row;
  }
  function recv(no, date, period, party, method, total, user, lines, note) {
    var row = doc(no, date, period, party, "مقبوض", total, user, lines, note);
    row.method = method;
    row.party = party;
    row.memo = party;
    return row;
  }
  function reportAcc(code, name, open, debit, credit, close, lines) {
    return {
      code: code, name: name, open: open, debit: debit, credit: credit, close: close,
      total: close, period: "month", status: "مرحّل", party: "كشف حساب",
      detailTitle: "كشف حساب " + code + " — " + name,
      note: "الفترة: 1 أكتوبر — 4 نوفمبر 2026. الرصيد الختامي مطابق لبطاقة الحساب.",
      lines: lines, lineCols: ["التاريخ", "المستند", "البيان", "مدين", "دائن"]
    };
  }
  function item(sku, name, qty, cost, value, warehouse, lines, note) {
    return {
      sku: sku, name: name, qty: qty, cost: cost, value: value, total: value,
      period: "month", party: warehouse, status: "متاح",
      detailTitle: sku + " — " + name,
      note: note, lines: lines,
      lineCols: ["التاريخ", "المستند", "الحركة", "وارد", "صادر", "التكلفة"]
    };
  }
  function stockMv(date, ref, kind, inn, out, cost) {
    return [date, ref, kind, inn ? String(inn) : "—", out ? String(out) : "—", cost];
  }
  function prod(name, qty, unit, price, amount) {
    var qtyLabel = qty === "—" ? "—" : String(qty) + (unit && unit !== "—" ? " " + unit : "");
    return [name, qtyLabel, price, amount];
  }
  function invoice(no, date, period, party, status, total, lines, vat, note) {
    var net = lines.reduce(function (s, l) { return s + Number(l[3]); }, 0);
    var tax = Math.round(net * vat) / 100;
    var gross = Math.round((net + tax) * 100) / 100;
    return {
      no: no, date: date, period: period, party: party, status: status, total: gross, net: net,
      detailTitle: "فاتورة مبيعات " + no,
      note: note,
      lines: lines.map(function (l) { return [l[0], l[1], sar(l[2]), sar(l[3])]; }),
      lineCols: ["الصنف", "الكمية", "السعر", "المبلغ"],
      totals: [
        ["المجموع قبل الضريبة", sar(net)],
        ["ضريبة القيمة المضافة " + vat + "%", vat ? sar(tax) : "معفى"],
        ["الإجمالي", sar(gross)]
      ]
    };
  }
  function ret(no, date, period, party, ref, total, lines, vat, note) {
    var row = invoice(no, date, period, party, "معتمد", total, lines, vat, note);
    row.ref = ref;
    row.detailTitle = "مرتجع مبيعات " + no;
    if (period === "older") row.period = "month";
    return row;
  }
  function pinvoice(no, date, period, party, status, total, lines, vat, note) {
    var row = invoice(no, date, period, party, status, total, lines, vat, note);
    row.detailTitle = "فاتورة مشتريات " + no;
    return row;
  }
  function pret(no, date, period, party, ref, total, lines, vat, note) {
    var row = pinvoice(no, date, period, party, "معتمد", total, lines, vat, note);
    row.ref = ref;
    row.detailTitle = "مرتجع مشتريات " + no;
    return row;
  }
  function quote(no, date, period, party, valid, total, lines, vat, note) {
    var row = invoice(no, date, period, party, "مفتوح", total, lines, vat, note);
    row.valid = valid;
    row.detailTitle = "عرض سعر " + no;
    return row;
  }
  function stockReport(name, openQty, inQty, outQty, closeQty, value, lines) {
    return {
      name: name, openQty: openQty, inQty: inQty, outQty: outQty, closeQty: closeQty,
      value: value, total: value, period: "month", status: "مقفَل للعرض",
      party: "مستودعات الجمعية",
      detailTitle: "حركة " + name,
      note: "تقييم بمتوسط التكلفة المرجح حتى 4 نوفمبر 2026.",
      lines: lines,
      lineCols: ["التاريخ", "المستند", "الحركة", "وارد", "صادر", "التكلفة"]
    };
  }

  function moneyOrDash(n) {
    return n ? sar(n) : "—";
  }
  function sar(n) {
    var sign = n < 0 ? "−" : "";
    var v = Math.abs(n);
    return sign + v.toLocaleString("ar-SA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ر.س";
  }

  var mounting = false;

  function boot() {
    var tabs = document.querySelector("#view .tabs");
    if (!tabs) return false;
    var view = document.getElementById("view") || tabs.parentElement;
    state.tabs = tabs;
    state.view = view;
    if (!tabs.querySelector("[data-fin]")) {
      var sample = tabs.querySelector("button");
      var label = document.createElement("span");
      label.className = "fin-label";
      label.textContent = "المالية";
      tabs.appendChild(label);
      SCREENS.forEach(function (screen) {
        var btn = sample ? sample.cloneNode(false) : document.createElement("button");
        btn.classList.remove("on");
        btn.removeAttribute("data-act");
        btn.removeAttribute("data-arg");
        btn.type = "button";
        btn.dataset.fin = screen.id;
        btn.textContent = screen.title;
        tabs.appendChild(btn);
      });
      if (!state.screen) {
        tabs.querySelectorAll("[data-fin]").forEach(function (b) { b.classList.remove("on"); });
      }
    }
    var root = view.querySelector(".fin-root");
    if (!root) {
      root = document.createElement("section");
      root.className = "fin-root";
      root.hidden = true;
      tabs.insertAdjacentElement("afterend", root);
    }
    var accent = "#1f6b45";
    var sampleBtn = tabs.querySelector("button:not([data-fin])");
    if (sampleBtn) {
      var border = getComputedStyle(sampleBtn).borderBottomColor;
      if (border && border !== "rgba(0, 0, 0, 0)") accent = border;
    }
    root.style.setProperty("--fin", accent);
    state.root = root;
    ensureCss();
    if (state.screen && root.hidden) show(state.screen);
    return true;
  }

  function ensure() {
    if (mounting) return;
    mounting = true;
    try { boot(); }
    finally { mounting = false; }
  }

  function onTabClick(e) {
    var btn = e.target.closest && e.target.closest("button");
    if (!btn) return;
    var view = document.getElementById("view");
    var tabs = btn.closest(".tabs");
    if (!view || !tabs || !view.contains(tabs)) return;
    if (btn.dataset.fin) {
      e.preventDefault();
      e.stopPropagation();
      ensure();
      show(btn.dataset.fin);
      return;
    }
    hide();
  }

  function contentNodes() {
    return Array.prototype.filter.call(state.view.children, function (el) {
      return el !== state.tabs && el !== state.root;
    });
  }

  function show(id) {
    state.screen = id;
    state.row = 0;
    state.tabs.querySelectorAll("button").forEach(function (b) { b.classList.remove("on"); });
    var active = state.tabs.querySelector('[data-fin="' + id + '"]');
    if (active) active.classList.add("on");
    contentNodes().forEach(function (el) { el.classList.add("fin-hidden"); });
    state.root.hidden = false;
    render();
  }

  function hide() {
    state.screen = null;
    if (state.tabs && state.tabs.isConnected) {
      state.tabs.querySelectorAll("[data-fin]").forEach(function (b) { b.classList.remove("on"); });
    }
    if (state.view && state.view.isConnected) {
      contentNodes().forEach(function (el) { el.classList.remove("fin-hidden"); });
    }
    if (state.root) state.root.hidden = true;
  }

  function screenById(id) {
    for (var i = 0; i < SCREENS.length; i++) if (SCREENS[i].id === id) return SCREENS[i];
    return SCREENS[0];
  }

  function visibleRows(screen) {
    if (screen.timeless || state.period === "month") return screen.rows;
    return screen.rows.filter(function (row) {
      if (state.period === "week") return row.period === "today" || row.period === "yesterday" || row.period === "week";
      return row.period === "yesterday";
    });
  }

  function render() {
    var screen = screenById(state.screen);
    var rows = visibleRows(screen);
    if (state.row >= rows.length) state.row = 0;
    var selected = rows[state.row];
    state.root.innerHTML =
      '<header class="fin-head"><div><p class="fin-kicker">جمعية النخيل التعاونية الزراعية</p><h2>' +
      escapeHtml(screen.title) + "</h2><p>" + escapeHtml(screen.blurb) + "</p></div>" +
      periodsHtml() + "</header>" +
      '<div class="fin-metrics">' + metricsFor(screen, rows).map(metricHtml).join("") + "</div>" +
      (rows.length ? tableHtml(screen, rows) + (selected ? detailHtml(selected) : "") : emptyHtml());
    state.root.querySelectorAll("[data-period]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.period = btn.dataset.period;
        state.row = 0;
        render();
      });
    });
    state.root.querySelectorAll("[data-row]").forEach(function (tr) {
      tr.addEventListener("click", function () {
        state.row = Number(tr.dataset.row);
        render();
      });
    });
  }

  function metricsFor(screen, rows) {
    if (screen.timeless) return screen.metrics;
    var sum = rows.reduce(function (s, row) { return s + (Number(row.total) || 0); }, 0);
    return [
      { label: screen.metrics[0].label, value: String(rows.length) },
      { label: "إجمالي المعروض", money: sum },
      { label: "العملة", value: "ريال سعودي" }
    ];
  }

  function periodsHtml() {
    return '<div class="fin-periods">' + PERIODS.map(function (p) {
      return '<button type="button" data-period="' + p.id + '"' + (p.id === state.period ? ' class="is-on"' : "") + ">" + p.label + "</button>";
    }).join("") + "</div>";
  }

  function metricHtml(m) {
    return '<article><span>' + escapeHtml(m.label) + "</span><strong>" + (m.money != null ? sar(m.money) : escapeHtml(m.value)) + "</strong></article>";
  }

  function tableHtml(screen, rows) {
    var head = screen.columns.map(function (c) { return "<th>" + escapeHtml(c.label) + "</th>"; }).join("");
    var body = rows.map(function (row, i) {
      var cells = screen.columns.map(function (c) {
        var raw = row[c.key];
        var text = c.money ? sar(raw || 0) : (raw == null ? "—" : String(raw));
        return "<td>" + escapeHtml(text) + "</td>";
      }).join("");
      return '<tr data-row="' + i + '"' + (i === state.row ? ' class="is-on"' : "") + ">" + cells + "</tr>";
    }).join("");
    return '<div class="fin-table-wrap"><table class="fin-table"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  }

  function detailHtml(row) {
    var facts = [
      ["التاريخ", row.date],
      ["الجهة", row.party],
      ["الحالة", row.status],
      ["طريقة الدفع", row.method],
      ["المرجع", row.ref || row.no || row.code || row.sku],
      ["صالح حتى", row.valid],
      ["المستودع", row.sku ? row.party : null]
    ].filter(function (f) { return f[1]; });
    var cols = (row.lineCols || []).map(function (c) { return "<th>" + escapeHtml(c) + "</th>"; }).join("");
    var lines = (row.lines || []).map(function (line) {
      var cells = Array.isArray(line) ? line : [];
      return "<tr>" + cells.map(function (cell) { return "<td>" + escapeHtml(String(cell)) + "</td>"; }).join("") + "</tr>";
    }).join("");
    var totals = (row.totals || []).map(function (t) {
      return "<div><span>" + escapeHtml(t[0]) + "</span><b>" + escapeHtml(t[1]) + "</b></div>";
    }).join("");
    return '<article class="fin-detail"><header><h3>' + escapeHtml(row.detailTitle || row.name || row.no) +
      '</h3><p>' + escapeHtml(row.note || "") + "</p></header>" +
      '<dl class="fin-facts">' + facts.map(function (f) {
        return "<div><dt>" + escapeHtml(f[0]) + "</dt><dd>" + escapeHtml(String(f[1])) + "</dd></div>";
      }).join("") + "</dl>" +
      (lines ? '<table class="fin-lines"><thead><tr>' + cols + "</tr></thead><tbody>" + lines + "</tbody></table>" : "") +
      (totals ? '<div class="fin-totals">' + totals + "</div>" : "") +
      "</article>";
  }

  function emptyHtml() {
    return '<p class="fin-empty">لا توجد مستندات في هذه الفترة. اختر «هذا الشهر» لعرض كل الحركات التجريبية.</p>';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function ensureCss() {
    if (document.getElementById("fin-css")) return;
    var style = document.createElement("style");
    style.id = "fin-css";
    style.textContent = [
      "#view .tabs{display:flex;flex-wrap:wrap;gap:6px;align-items:center}",
      ".fin-hidden{display:none !important}",
      ".fin-label{align-self:center;margin-inline:10px 4px;padding:2px 8px;border-radius:999px;font-size:12px;letter-spacing:.02em;color:var(--fin,#1f6b45);background:color-mix(in srgb,var(--fin,#1f6b45) 12%,transparent)}",
      ".fin-root{margin:8px 0 28px;color:inherit;font:inherit}",
      ".fin-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-end;flex-wrap:wrap;margin-bottom:14px}",
      ".fin-kicker{margin:0 0 4px;font-size:12px;color:#607063}",
      ".fin-head h2{margin:0;font-size:22px;font-weight:700}",
      ".fin-head p{margin:4px 0 0;color:#5d675f;font-size:14px}",
      ".fin-periods{display:flex;gap:6px;background:#f3f1ea;border-radius:999px;padding:4px}",
      ".fin-periods button{border:0;background:transparent;border-radius:999px;padding:8px 14px;cursor:pointer;font:inherit;color:#243128}",
      ".fin-periods button.is-on{background:#16382a;color:#fff}",
      ".fin-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:12px}",
      ".fin-metrics article{background:#fff;border:1px solid #e6e1d6;border-radius:14px;padding:12px 14px}",
      ".fin-metrics span{display:block;color:#6b7280;font-size:12px;margin-bottom:4px}",
      ".fin-metrics strong{font-size:18px}",
      ".fin-table-wrap{overflow:auto;border:1px solid #e6e1d6;border-radius:14px;background:#fff}",
      ".fin-table{width:100%;border-collapse:collapse;font-size:14px}",
      ".fin-table th,.fin-table td{padding:10px 12px;text-align:right;white-space:nowrap}",
      ".fin-table th{font-size:12px;color:#6b7280;font-weight:600;background:#faf8f4}",
      ".fin-table tbody tr{cursor:pointer;border-top:1px solid #f0ece4}",
      ".fin-table tbody tr.is-on{background:color-mix(in srgb,var(--fin,#1f6b45) 10%,white)}",
      ".fin-detail{margin-top:12px;background:#fff;border:1px solid #e6e1d6;border-radius:16px;padding:16px}",
      ".fin-detail h3{margin:0 0 4px;font-size:16px}",
      ".fin-detail header p{margin:0;color:#5d675f;font-size:13px}",
      ".fin-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px 16px;margin:14px 0}",
      ".fin-facts div{min-width:0}",
      ".fin-facts dt{font-size:11px;color:#6b7280}",
      ".fin-facts dd{margin:2px 0 0;font-weight:600}",
      ".fin-lines{width:100%;border-collapse:collapse;font-size:13px}",
      ".fin-lines th,.fin-lines td{padding:8px 10px;text-align:right;border-bottom:1px solid #f0ece4}",
      ".fin-lines th{color:#6b7280;font-size:12px;font-weight:600}",
      ".fin-totals{margin-top:10px;margin-inline-start:auto;width:min(320px,100%)}",
      ".fin-totals div{display:flex;justify-content:space-between;gap:12px;padding:4px 0}",
      ".fin-totals div:last-child{border-top:2px solid var(--fin,#1f6b45);margin-top:4px;padding-top:8px;font-size:16px}",
      ".fin-empty{padding:28px;text-align:center;color:#5d675f;background:#fff;border-radius:14px}",
      "@media(max-width:800px){.fin-metrics,.fin-facts{grid-template-columns:1fr}}"
    ].join("");
    document.head.appendChild(style);
  }

  function start() {
    document.addEventListener("click", onTabClick, true);
    ensure();
    var queued = false;
    new MutationObserver(function () {
      if (queued || mounting) return;
      var tabs = document.querySelector("#view .tabs");
      if (tabs && tabs.querySelector("[data-fin]") && state.root && state.root.isConnected) return;
      queued = true;
      requestAnimationFrame(function () {
        queued = false;
        ensure();
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
