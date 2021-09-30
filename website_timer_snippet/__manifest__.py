# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright 2018 Odoo Helper
# See LICENSE file for full copyright and licensing details.
#
##############################################################################
{
    'name': 'Website Timer Snippet',
    'category': 'Website',
    'version': '13.0.1',
    'summary': 'Website Timer Snippet',

    'description': """
        Website Timer Snippet
        ==================
        This module allows to Put Countdown Timer Snippet For Offers, Products or Discount in Home page as well any pages
    """,

    'author': 'Odoo Helper',
    'images': ['images/OdooHelper.jpg'],

     # Dependencies
    'depends': ['portal','base', 'website'],
    
    #views
    'data': [
        'templates/assets.xml',
        'templates/snippet.xml',
        'views/res_company_view.xml',
    ],

    'images': ['images/OdooHelper.jpg'],
    'price': 14.16,
    'currency': 'USD',

    'application': True,
    'installable': True,
    'auto_install': False,
}
